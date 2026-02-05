import React from 'react';
import type { Metadata } from 'next';
import { GalleryHero } from './_components/gallery-hero';
import { GalleryGrid } from './_components/gallery-grid';
import { getGalleryImages } from '@/lib/r2';

export const metadata: Metadata = {
  title: "Gallery - Ekuphumleni",
  description: "Browse photos of our projects, community events, and daily life at Ekuphumleni.",
};

const GalleryPage = async () => {
  const images = await getGalleryImages();

  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryGrid images={images} />
    </div>
  );
};

export default GalleryPage;
