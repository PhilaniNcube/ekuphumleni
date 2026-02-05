import React from "react";
import Image from "next/image";

export function GalleryHero() {
  return (
    <section className="relative w-full h-[40vh] min-h-75 flex items-center justify-center bg-zinc-100 overflow-hidden">
        {/* Background - reusing a generic image or pattern if available, or just keeping simpler for now */}
       <div className="absolute inset-0 w-full h-full opacity-20">
        <Image
          src="/images/hero_image.png"
          alt="Gallery Background"
          fill
          className="object-cover"
        />
      </div> 
      
      <div className="relative z-10 container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-green mb-4">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl text-brand-olive-green max-w-2xl mx-auto">
          A visual journey through our community, projects, and impact.
        </p>
      </div>
    </section>
  );
}
