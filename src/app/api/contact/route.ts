import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, phone, projectType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Liznat Labs <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "liznatlabs@gmail.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px">
          <h2 style="margin-bottom:16px">New project enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Project type:</strong> ${projectType || "Not specified"}</p>
          <hr style="margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
