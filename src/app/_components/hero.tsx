import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/3 h-[50vh] lg:h-auto">
        <Image
          src="/images/hero_image.png"
          alt="Hero Image"
          fill
          className="object-cover rounded-tr-[50%]"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-8 lg:px-16">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="Ekuphumleni Logo"
            width={620}
            height={476}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
   

          <p className="text-lg text-gray-700 text-center">
            Veggie Garden, Meals, Creche, and Church Services
          </p>

          {/* Services */}
          <div className="mb-6">
            <p className="text-sm sm:text-lg md:text-xl font-medium text-center">
              <span className="text-[#2E7D32]">CRECHE</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#F5A623]">WARM MEALS</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#2E7D32]">CHURCH</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#2E7D32]">VEGGIE GARDEN</span>
            </p>
            <p className="text-[#C4A962] text-lg mt-2 text-center">- OPEN DAILY -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
