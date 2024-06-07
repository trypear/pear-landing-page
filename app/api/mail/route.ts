import { Resend } from "resend"
import { SelectEmailTemplate } from "@/components/email-templates"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { to, subject, data } = body
  const EmailTemplate = SelectEmailTemplate(data)

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Pear AI <accounts@pear.ai>
      to: [to],
      subject,
      react: EmailTemplate as JSX.Element,
    })

    if (error) {
      return NextResponse.json({ error, status: 500 })
    }

    return NextResponse.json({ message: "Email sent!", data, status: 200 })
  } catch (error) {
    return NextResponse.json({ error, status: 500 })
  }
}
