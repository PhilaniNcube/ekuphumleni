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
          className="object-cover lg:rounded-tr-[50%]"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center mt-4 lg:mt-0 items-center w-full lg:w-2/3 px-8 lg:px-16">
        <div className="">
          <Image
            src="/images/logo.webp"
            alt="Ekuphumleni Logo"
            width={864}
            height={559}
            className="object-contain w-full h-auto"
          />
      
        </div>

        <div className="flex flex-col items-center justify-center">
   

        

          {/* Services */}
          <div className="mb-6">
         <p className="text-lg md:text-xl text-brand-grey font-bold text-center">
          Veggie Garden, Meals, Creche, and Church Services
        </p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-3xl font-medium text-center mt-7">
              <span className="text-[#F5A623]">CRECHE</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#F5A623]">WARM MEALS</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#F5A623]">CHURCH</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#F5A623]">VEGGIE GARDEN</span>
            </p>
            <p className="text-[#C4A962] text-xl lg:text-4xl mt-2 text-center">- OPEN DAILY -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
