import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailService } from "@/app/service/email";

const smtpOptions: SMTPTransport.Options = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
};

const transporter = nodemailer.createTransport(smtpOptions);

export async function POST(req: Request) {
  const data = await req.json();
  const email = EmailService(data);

  const mailOptions = {
    from: {
      name: "Orçamento",
      address: process.env.EMAIL_USERNAME as string,
    },
    to: [process.env.EMAIL_TO as string, process.env.EMAIL_TO_CC as string],
    subject: "Novo orçamento no site",
    text: email.generatePlainText(),
    html: email.generateEmailHTML(),
  };

  try {
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}
