import { NextResponse } from "next/server";
import { sendFormMail, getMailerStatus, getMailTo, type FormKey } from "../../lib/mailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// formType -> mail subject
const SUBJECTS: Record<string, string> = {
  newsletter: "New Newsletter Signup",
  contact: "New Contact Us Enquiry",
  blog: "New Blog Page Enquiry",
};

// Test / Diagnostics: browser me /api/contact?check=status kholo
export async function GET(req: Request) {
  const url = new URL(req.url);
  const isStatusCheck =
    url.searchParams.get("check") === "status" ||
    url.searchParams.get("debug") === "1" ||
    process.env.NODE_ENV !== "production";

  if (!isStatusCheck) {
    return NextResponse.json({
      status: "Contact API active",
      method: "POST required",
      diagnostics: "Visit /api/contact?check=status to test mail configuration",
    });
  }

  const status = await getMailerStatus();
  return NextResponse.json(status);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, ...rest } = body || {};

    if (!formType || !SUBJECTS[formType]) {
      return NextResponse.json({ message: "Invalid form" }, { status: 400 });
    }

    const email = String(rest.email || "").trim();
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    // Sirf string fields lo, length limit ke saath
    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(rest)) {
      if (typeof value === "string" && value.trim()) {
        fields[key] = value.trim().slice(0, 5000);
      }
    }

    await sendFormMail({
      to: getMailTo(formType as FormKey),
      subject: SUBJECTS[formType],
      fields,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact mail error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        message: "Failed to send",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
