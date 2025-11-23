import React from 'react'
import { ServicesHero } from './_components/services-hero'
import { ServicesList } from './_components/services-list'

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServicesList />
    </div>
  )
}

export default ServicesPage