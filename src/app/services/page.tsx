import React from 'react'
import type { Metadata } from 'next'
import { ServicesHero } from './_components/services-hero'
import { ServicesList } from './_components/services-list'

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover our community services including skills development, youth programs, and health & wellness initiatives.",
};

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServicesList />
    </div>
  )
}

export default ServicesPage