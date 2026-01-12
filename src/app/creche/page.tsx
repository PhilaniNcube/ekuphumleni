import React from "react";
import type { Metadata } from 'next';
import { CrecheHero } from "../_components/creche-hero";

export const metadata: Metadata = {
  title: "Community Creche",
  description: "Our creche provides a safe and nurturing environment for early childhood development and learning.",
};

const CrechePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CrecheHero />
    </div>
  );
};

export default CrechePage;
