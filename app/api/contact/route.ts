import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD?.replace(/\s+/g, "");

  if (!smtpEmail || !smtpPassword) {
    console.error("Missing SMTP credentials in environment variables.");
    return NextResponse.json(
      { error: "Server email configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpEmail}>`,
      to: smtpEmail,
      replyTo: email,
      subject: `🔔 New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSocial: ${social || "Not provided"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
            📬 New Portfolio Inquiry
          </h2>
          
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <p style="margin: 6px 0; color: #334155;"><strong>From:</strong> ${name}</p>
            <p style="margin: 6px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            ${
              social
                ? `<p style="margin: 6px 0; color: #334155;"><strong>Social / Profile:</strong> <a href="${social}" target="_blank" style="color: #2563eb; text-decoration: none;">${social}</a></p>`
                : `<p style="margin: 6px 0; color: #64748b;"><strong>Social / Profile:</strong> None provided</p>`
            }
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #1e293b; margin-bottom: 8px; font-size: 15px;">Message:</h3>
            <div style="color: #334155; line-height: 1.6; white-space: pre-wrap; background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-size: 14px;">${message}</div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 12px; color: #64748b;">
            💡 <em>Tip: You can simply click "Reply" in your email client to respond directly to ${name} (${email}).</em>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
