import { NextResponse } from "next/server";
import { sendFormMail, getMailTo } from "../../lib/mailer";

export const runtime = "nodejs";

const MAX_CV_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const cv = formData.get("cv");

    if (!name || !email || !mobile || !interest) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ message: "Please upload your CV." }, { status: 400 });
    }

    const lower = cv.name.toLowerCase();
    if (!ALLOWED_EXT.some((ext) => lower.endsWith(ext))) {
      return NextResponse.json({ message: "Only PDF, DOC or DOCX allowed." }, { status: 400 });
    }

    if (cv.size > MAX_CV_SIZE) {
      return NextResponse.json({ message: "CV must be under 5MB." }, { status: 400 });
    }

    const buffer = Buffer.from(await cv.arrayBuffer());

    await sendFormMail({
      to: getMailTo("apply"),
      subject: `New Job Application - ${interest}`,
      fields: { name, email, mobile, interest },
      replyTo: email,
      attachments: [{ filename: cv.name, content: buffer, contentType: cv.type || undefined }],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("apply mail error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        message: "Failed to send application.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
