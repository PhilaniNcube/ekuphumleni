import React from 'react'
import type { Metadata } from 'next'
import { ContactHero } from './_components/contact-hero'
import { ContactInfo } from './_components/contact-info'
import { HowToHelp } from './_components/how-to-help'
import { ContactForm } from './_components/contact-form'
// import { ContactMap } from './_components/contact-map'
import { ContactCTA } from './_components/contact-cta'

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ekuphumleni. We'd love to hear from you regarding partnerships, donations, or general inquiries.",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <ContactInfo />
      <HowToHelp />
      <ContactForm />
      {/* <ContactMap /> */}
      <ContactCTA />
    </div>
  )
}

export default ContactPage