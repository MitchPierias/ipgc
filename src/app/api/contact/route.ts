import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Verify hCaptcha token
async function verifyHCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.HCAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("HCAPTCHA_SECRET_KEY environment variable is not set");
    return false;
  }

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verifying hCaptcha:", error);
    return false;
  }
}

// Configure nodemailer transporter
function createTransporter() {
  const emailService = process.env.EMAIL_SERVICE || "gmail";
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    throw new Error("Email credentials not configured");
  }

  return nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
}

// Parse form data including file uploads
async function parseFormData(request: NextRequest): Promise<{
  fields: Record<string, string>;
  files: Record<string, any>;
}> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      keepExtensions: true,
      uploadDir: path.join(process.cwd(), "tmp"),
    });

    // Convert the request to a Node.js IncomingMessage-like object
    const formData = request.formData();

    formData
      .then(async (data) => {
        const fields: Record<string, string> = {};
        const files: Record<string, any> = {};

        for (const [key, value] of data.entries()) {
          if (value instanceof File) {
            // Handle file upload
            const buffer = Buffer.from(await value.arrayBuffer());
            const filename = value.name;
            const filepath = path.join(process.cwd(), "tmp", filename);

            // Ensure tmp directory exists
            const tmpDir = path.dirname(filepath);
            if (!fs.existsSync(tmpDir)) {
              fs.mkdirSync(tmpDir, { recursive: true });
            }

            // Write file to temp location
            fs.writeFileSync(filepath, buffer);

            files[key] = {
              originalFilename: filename,
              filepath: filepath,
              mimetype: value.type,
              size: value.size,
            };
          } else {
            fields[key] = value.toString();
          }
        }

        resolve({ fields, files });
      })
      .catch(reject);
  });
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const { fields, files } = await parseFormData(request);

    const { name, phone, email, captchaToken } = fields;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify hCaptcha
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    const captchaValid = await verifyHCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Prepare email attachments
    const attachments = [];
    if (files.attachment) {
      attachments.push({
        filename: files.attachment.originalFilename,
        path: files.attachment.filepath,
      });
    }

    // Email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailText = `
New contact form submission:

Name: ${name}
Phone: ${phone}
Email: ${email}

---
This message was sent from the IPGC website contact form.
    `.trim();

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #eee;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #eee;">Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #eee;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
        </table>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This message was sent from the IPGC website contact form.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || email,
      to: "mitch@pierias.com",
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      attachments: attachments,
      replyTo: email,
    });

    // Clean up temporary files
    if (files.attachment) {
      try {
        fs.unlinkSync(files.attachment.filepath);
      } catch (error) {
        console.error("Error cleaning up temporary file:", error);
      }
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
