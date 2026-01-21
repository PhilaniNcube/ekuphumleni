import React from 'react'
import type { Metadata } from 'next'
import { DonateHero } from './_components/donate-hero'
import { DonateForm } from './_components/donate-form'
import { DonateInfo } from './_components/donate-info'
import { DonateImpact } from './_components/donate-impact'

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Ekuphumleni's mission by making a donation. Your contribution helps us provide essential services to the Joe Slovo community.",
};

const DonatePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DonateHero />
      <DonateInfo />
      <DonateForm />
      <DonateImpact />
    </div>
  )
}

export default DonatePage
