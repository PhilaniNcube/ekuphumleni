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

import type { DonateFormValues } from "@/lib/donate-form-schema"

type DonateFormEmailProps = DonateFormValues

const purposeLabels: Record<DonateFormValues["purpose"], string> = {
  general: "General Support",
  creche: "Creche & Early Learning",
  garden: "Community Garden",
  programs: "Community Programs",
}

const donorTypeLabels: Record<DonateFormValues["donorType"], string> = {
  individual: "Individual",
  organization: "Organization",
}

const donationTypeLabels: Record<DonateFormValues["donationType"], string> = {
  once: "One-time",
  monthly: "Monthly",
}

export function DonateFormEmail({
  amount,
  donationType,
  donorType,
  email,
  message,
  name,
  phone,
  purpose,
}: DonateFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`Donation enquiry from ${name}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New donation enquiry</Heading>
          <Text style={intro}>
            A donor submitted the donation form on the Ekuphumleni website.
          </Text>
          <Section style={details}>
            <Text style={label}>Donor</Text>
            <Text style={value}>{name}</Text>
            <Text style={value}>{donorTypeLabels[donorType]}</Text>
            <Text style={value}>{email}</Text>
            <Text style={value}>{phone}</Text>
          </Section>
          <Section style={details}>
            <Text style={label}>Donation details</Text>
            <Text style={value}>{`R${amount}`}</Text>
            <Text style={value}>{donationTypeLabels[donationType]}</Text>
            <Text style={value}>{purposeLabels[purpose] ?? purpose}</Text>
          </Section>
          {message ? (
            <>
              <Hr style={divider} />
              <Section>
                <Text style={label}>Message</Text>
                <Text style={messageText}>{message}</Text>
              </Section>
            </>
          ) : null}
        </Container>
      </Body>
    </Html>
  )
}

DonateFormEmail.PreviewProps = {
  donorType: "individual",
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+27 71 234 5678",
  amount: "1000",
  donationType: "once",
  purpose: "general",
  message: "Please send me the banking details and any tax receipt information.",
} satisfies DonateFormEmailProps

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

export default DonateFormEmail