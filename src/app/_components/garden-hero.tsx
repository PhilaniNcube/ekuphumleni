import React from "react";
import Image from "next/image";

export const GardenHero = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/3 h-[50vh] lg:h-auto">
        <Image
          src="/images/plants.jpg"
          alt="Community Garden"
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
          <p className="text-lg md:text-xl text-brand-grey font-bold text-center">
            Veggie Garden, Meals, and Creche
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-dark-green mt-4 mb-2 text-center tracking-wide">
            Veggie Garden <br /> WORKSHOP
          </h1>

          <p className="text-lg md:text-xl font-medium text-brand-grey text-center">
            How to care for, and grow your own veggies
          </p>

          <div className="mb-6">
            <p className="text-lg lg:text-xl text-brand-olive-green text-center mb-4 text-balance font-medium max-w-[55ch] mx-auto">
              &quot;Unlock the Power of Your Own Garden: Join our Free Veggie
              Garden Workshop!&quot; <br />
              This workshop is designed for people in rural areas who want to
              grow their own food in their small garden, improve their
              nutrition, and save money on nutritious food. We&apos;ll cover
              everything from choosing the right vegetables to planting, caring
              for your garden, and harvesting your bounty. Let&apos;s grow
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
