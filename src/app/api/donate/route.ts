import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

import DonateFormEmail from "@/emails/donate-form-email"
import { donateFormSchema } from "@/lib/donate-form-schema"

export const runtime = "nodejs"

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z
    .string()
    .min(1)
    .default("Ekuphumleni <onboarding@resend.dev>"),
  RESEND_CONTACT_TO_EMAIL: z.string().email(),
  RESEND_DONATION_TO_EMAIL: z.string().email().optional(),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = donateFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the donation form fields and try again." },
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
  const recipient = env.data.RESEND_DONATION_TO_EMAIL ?? env.data.RESEND_CONTACT_TO_EMAIL

  try {
    const result = await resend.emails.send({
      from: env.data.RESEND_FROM_EMAIL,
      to: [recipient],
      replyTo: parsed.data.email,
      subject: `Donation enquiry: ${parsed.data.name}`,
      react: DonateFormEmail(parsed.data),
    })

    if (result.error) {
      return NextResponse.json(
        { error: "The donation request could not be sent right now." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "The donation request could not be sent right now." },
      { status: 502 }
    )
  }
}