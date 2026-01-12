import React from "react";
import type { Metadata } from 'next';
import { GardenHero } from "../_components/garden-hero";

export const metadata: Metadata = {
  title: "Community Garden",
  description: "Our community garden provides fresh produce and skills training to promote self-sufficiency.",
};

const GardenPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GardenHero />
    </div>
  );
};

export default GardenPage;
