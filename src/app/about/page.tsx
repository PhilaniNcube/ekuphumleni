import React from 'react'
import { AboutHero } from './_components/about-hero'
import { History } from './_components/history'
import { VisionMission } from './_components/vision-mission'
import { Objectives } from './_components/objectives'
import { TeamGovernance } from './_components/team-governance'
import { Partners } from './_components/partners'

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <History />
      <VisionMission />
      <Objectives />
      <TeamGovernance />
      <Partners />
    </div>
  )
}

export default AboutPage