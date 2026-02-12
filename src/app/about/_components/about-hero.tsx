import React from "react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/3 h-[50vh] lg:h-auto">
        <Image
          src="/images/hero_image.png"
          alt="About Ekuphumleni"
          fill
          className="object-cover lg:rounded-br-[50%]"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-8 lg:px-16">
        <div className="">
          <Image
            src="/images/logo.webp"
            alt="Ekuphumleni Logo"
            width={620}
            height={476}
            className="object-contain w-full h-auto"
          />
        </div>
        <p className="text-lg md:text-xl text-brand-grey font-bold text-center">
          Veggie Garden, Meals, and Creche
        </p>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark-green mt-4 mb-2 text-center tracking-wide">
            Our Story: Building a Stronger <br /> Ekuphumleni Joe Slovo
          </h1>

          <p className="text-lg lg:text-2xl text-brand-olive-green text-center mb-4 text-balance font-medium max-w-[55ch] mx-auto">
            Together, we are cultivating hope, empowering lives, and nurturing our community&apos;s future.
          </p>
        </div>
      </div>
    </section>
  );
}
