import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

import ContactFormEmail from "@/emails/contact-form-email"
import { contactFormSchema } from "@/lib/contact-form-schema"

export const runtime = "nodejs"

const envSchema = contactFormEnvSchema()

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    )
  }

  const env = envSchema.safeParse(process.env)

  if (!env.success) {
    return NextResponse.json(
      { error: "Email is not configured yet on this deployment." },
      { status: 500 }
    )
  }

  const resend = new Resend(env.data.RESEND_API_KEY)

  try {
    const result = await resend.emails.send({
      from: env.data.RESEND_FROM_EMAIL,
      to: [env.data.RESEND_CONTACT_TO_EMAIL],
      replyTo: parsed.data.email,
      subject: `Contact form: ${parsed.data.subject}`,
      react: ContactFormEmail(parsed.data),
    })

    if (result.error) {
      return NextResponse.json(
        { error: "The message could not be sent right now." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "The message could not be sent right now." },
      { status: 502 }
    )
  }
}

function contactFormEnvSchema() {
  return z.object({
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z
      .string()
      .min(1)
      .default("Ekuphumleni <onboarding@resend.dev>"),
    RESEND_CONTACT_TO_EMAIL: z.string().email(),
  })
}