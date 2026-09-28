import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_LENGTHS = { name: 200, email: 320, phone: 40, projectType: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(body: Record<string, unknown>, key: keyof typeof MAX_LENGTHS) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTHS[key]) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid body");
    body = parsed;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Single-line fields go into the subject, so strip any newlines.
  const name = field(body, "name").replace(/[\r\n]+/g, " ");
  const email = field(body, "email");
  const phone = field(body, "phone");
  const projectType = field(body, "projectType").replace(/[\r\n]+/g, " ");
  const message = field(body, "message");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    projectType: escapeHtml(projectType),
    message: escapeHtml(message),
  };

  try {
    // Resend reports API failures via `error` rather than throwing.
    const { error } = await resend.emails.send({
      from: "Liznat Labs <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "liznatlabs@gmail.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px">
          <h2 style="margin-bottom:16px">New project enquiry</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
          <p><strong>Phone:</strong> ${safe.phone || "Not provided"}</p>
          <p><strong>Project type:</strong> ${safe.projectType || "Not specified"}</p>
          <hr style="margin:16px 0"/>
          <p style="white-space:pre-wrap">${safe.message}</p>
        </div>
      `,
    });
    if (error) throw error;
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
