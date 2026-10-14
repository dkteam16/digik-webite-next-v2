import nodemailer from "nodemailer";

// Saare forms ki mail yahin jayegi
export const MAIL_TO = (process.env.MAIL_TO || "").trim();

// Har form ka alag email set kar sakte ho (.env.local me):
// MAIL_TO_CONTACT, MAIL_TO_BLOG, MAIL_TO_NEWSLETTER, MAIL_TO_APPLY
// Set nahi kiya to MAIL_TO par jayegi. Ek se zyada email ho to comma se alag karo.
export type FormKey = "contact" | "blog" | "newsletter" | "apply";

export function getMailTo(form: FormKey): string {
  const specific = (process.env[`MAIL_TO_${form.toUpperCase()}`] || "").trim();
  const to = specific || MAIL_TO;
  if (!to) {
    throw new Error("MAIL_TO set nahi hai (.env.local check karo aur server restart karo)");
  }
  return to;
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  const user = (process.env.GMAIL_USER || "").trim();
  // App password ke beech ke spaces hata do
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");

  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER ya GMAIL_APP_PASSWORD set nahi hai (.env.local check karo aur server restart karo)"
    );
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

// Browser me /api/contact kholne par ye chalta hai (sirf development me)
export async function getMailerStatus() {
  const status: Record<string, unknown> = {
    GMAIL_USER_set: Boolean(process.env.GMAIL_USER),
    GMAIL_APP_PASSWORD_set: Boolean(process.env.GMAIL_APP_PASSWORD),
    GMAIL_APP_PASSWORD_length_without_spaces: (
      process.env.GMAIL_APP_PASSWORD || ""
    ).replace(/\s+/g, "").length,
    MAIL_TO,
  };

  try {
    await getTransporter().verify();
    status.smtp = "OK - Gmail login successful";
  } catch (err) {
    status.smtp = "FAILED";
    status.error = err instanceof Error ? err.message : String(err);
  }

  return status;
}

type SendArgs = {
  to?: string;
  subject: string;
  fields: Record<string, string>;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
};

export async function sendFormMail({
  to,
  subject,
  fields,
  replyTo,
  attachments,
}: SendArgs) {
  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border:1px solid #ddd;background:#f7f7f7"><b>${escapeHtml(
          k
        )}</b></td><td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  const text = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  await getTransporter().sendMail({
    from: `"Website Forms" <${(process.env.GMAIL_USER || "").trim()}>`,
    to: to || getMailTo("contact"),
    replyTo,
    subject,
    text,
    html: `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
    attachments,
  });
}
