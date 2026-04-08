import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import type { ContactFormValues } from "@/lib/contact-form-schema"

type ContactFormEmailProps = ContactFormValues

export function ContactFormEmail({
  email,
  message,
  name,
  subject,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New contact form submission</Heading>
          <Text style={intro}>
            You received a new message from the Ekuphumleni website contact form.
          </Text>
          <Section style={details}>
            <Text style={label}>From</Text>
            <Text style={value}>{name}</Text>
            <Text style={value}>{email}</Text>
          </Section>
          <Section style={details}>
            <Text style={label}>Subject</Text>
            <Text style={value}>{subject}</Text>
          </Section>
          <Hr style={divider} />
          <Section>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

ContactFormEmail.PreviewProps = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Partnership enquiry",
  message:
    "Hello, I would like to learn more about how our organization can support your community programmes.",
} satisfies ContactFormEmailProps

const body = {
  backgroundColor: "#f2e4b1",
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: "32px 16px",
}

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "640px",
  padding: "32px",
}

const heading = {
  color: "#1d6b3e",
  fontSize: "28px",
  lineHeight: "1.2",
  margin: "0 0 16px",
}

const intro = {
  color: "#4f4f4f",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 24px",
}

const details = {
  marginBottom: "20px",
}

const label = {
  color: "#808d46",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
}

const value = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 4px",
}

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
}

const messageText = {
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap" as const,
}

export default ContactFormEmail