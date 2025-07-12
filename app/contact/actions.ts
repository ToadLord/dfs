"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { redirect } from "next/navigation";

export async function sendContactEmail(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const query = formData.get("query") as string;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "playstationforgerald@gmail.com",
    subject: "New Contact Query",
    react: EmailTemplate({ firstName, lastName, email, query }),
  });

  redirect("/contact?success=1");
}
