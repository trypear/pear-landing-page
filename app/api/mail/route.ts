import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  const { body } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shriprasanna32@gmail.com",
      subject: "Hello world",
      react: "sasa",
    })

    return NextResponse.json({ message: "Email sent!", data, status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err, status: 400 })
  }
}
