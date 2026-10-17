import nodemailer from "nodemailer";

// Saare forms ki mail yahin jayegi
export const MAIL_TO = (
  process.env.MAIL_TO ||
  process.env.GMAIL_USER ||
  process.env.SMTP_USER ||
  "info@digitalkangaroos.com"
).trim();

// Har form ka alag email set kar sakte ho (.env.local me):
// MAIL_TO_CONTACT, MAIL_TO_BLOG, MAIL_TO_NEWSLETTER, MAIL_TO_APPLY
// Set nahi kiya to MAIL_TO par jayegi. Ek se zyada email ho to comma se alag karo.
export type FormKey = "contact" | "blog" | "newsletter" | "apply";

export function getMailTo(form: FormKey): string {
  const specific = (process.env[`MAIL_TO_${form.toUpperCase()}`] || "").trim();
  const to = specific || MAIL_TO;
  if (!to) {
    throw new Error(
      "Recipient email (MAIL_TO) is not configured. Please set MAIL_TO in your server .env.local file."
    );
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

function getMailConfig() {
  const user = (process.env.GMAIL_USER || process.env.SMTP_USER || "").trim();
  const pass = (
    process.env.GMAIL_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    ""
  ).replace(/\s+/g, "");

  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : port === 465;

  return { user, pass, host, port, secure };
}

export function getTransporter(customPort?: number, customSecure?: boolean) {
  const { user, pass, host, port, secure } = getMailConfig();

  if (!user || !pass) {
    throw new Error(
      "Email credentials are not configured on this server. Please set GMAIL_USER and GMAIL_APP_PASSWORD in your server .env.local file and restart the application."
    );
  }

  const finalPort = customPort !== undefined ? customPort : port;
  const finalSecure = customSecure !== undefined ? customSecure : (customPort === 587 ? false : secure);

  return nodemailer.createTransport({
    host,
    port: finalPort,
    secure: finalSecure,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
      rejectUnauthorized: false,
    },
  });
}

// Browser me /api/contact?check=status kholne par ye status batata hai (safe diagnostics)
export async function getMailerStatus() {
  const { user, pass, host, port } = getMailConfig();

  const status: Record<string, unknown> = {
    configured: {
      user_set: Boolean(user),
      user_masked: user
        ? `${user.slice(0, 3)}***@${user.split("@")[1] || ""}`
        : "NOT SET (Missing GMAIL_USER or SMTP_USER)",
      password_set: Boolean(pass),
      password_length: pass.length,
      password_note:
        pass.length === 16
          ? "16 characters (Expected Google App Password length)"
          : pass.length === 0
          ? "NOT SET (Missing GMAIL_APP_PASSWORD)"
          : `${pass.length} characters (Make sure this is a 16-character Google App Password, not normal account password)`,
      host,
      port,
      mail_to: MAIL_TO || "NOT SET",
    },
  };

  if (!user || !pass) {
    status.smtp = "FAILED - Missing environment variables";
    status.help =
      "Please add GMAIL_USER and GMAIL_APP_PASSWORD to your .env.local file on the live server and restart PM2 / Next.js.";
    return status;
  }

  try {
    // 1. Try port 465
    await getTransporter(465, true).verify();
    status.smtp = "OK - Connected successfully via port 465";
  } catch (err465) {
    try {
      // 2. Try port 587 fallback
      await getTransporter(587, false).verify();
      status.smtp = "OK - Connected successfully via port 587 (port 465 had connection issue)";
    } catch (err587) {
      status.smtp = "FAILED - Could not authenticate with SMTP server";
      status.error_port_465 = err465 instanceof Error ? err465.message : String(err465);
      status.error_port_587 = err587 instanceof Error ? err587.message : String(err587);
    }
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
  const { user } = getMailConfig();
  const recipient = to || getMailTo("contact");

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

  const mailOptions = {
    from: `"Website Forms" <${user}>`,
    to: recipient,
    replyTo,
    subject,
    text,
    html: `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
    attachments,
  };

  // Try primary transporter (port 465 / custom port)
  try {
    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
  } catch (primaryError: any) {
    // If port 465 timed out or connection was refused, retry via port 587 (STARTTLS)
    const isConnError =
      primaryError?.code === "ETIMEDOUT" ||
      primaryError?.code === "ECONNREFUSED" ||
      primaryError?.code === "ESOCKET" ||
      primaryError?.command === "CONN";

    if (isConnError && !process.env.SMTP_PORT) {
      console.warn("Primary SMTP connection failed, attempting fallback via port 587...");
      const fallbackTransporter = getTransporter(587, false);
      await fallbackTransporter.sendMail(mailOptions);
    } else {
      throw primaryError;
    }
  }
}
