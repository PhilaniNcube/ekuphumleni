import React from "react";
import Image from "next/image";

export const CrecheHero = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/3 h-[50vh] lg:h-auto">
        <Image
          src="/images/creche.jpg"
          alt="Community Creche"
          fill
          className="object-cover rounded-bl-[50%] scale-x-[-1]"
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
          <h1 className="text-4xl font-bold text-[#2E7D32] mt-4 mb-2 text-center uppercase tracking-wide">
            Community Creche
          </h1>

          <p className="text-lg text-gray-700 text-center mb-4 font-medium">
            Our creche focuses on providing a safe and nurturing environment for
            learning,especially for our children from impoverished backgrounds -
            it is crucial for their development and future success.
          </p>

          {/* Services */}
          {/* <div className="mb-6">
            <p className="text-sm sm:text-lg md:text-xl font-medium text-center">
              <span className="text-[#2E7D32]">SAFE PLAY</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#F5A623]">NUTRITIOUS MEALS</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#2E7D32]">EARLY LEARNING</span>
              <span className="text-[#F5A623] mx-2">•</span>
              <span className="text-[#2E7D32]">CARE</span>
            </p>
            <p className="text-[#C4A962] text-lg mt-2 text-center">
              - OPEN DAILY -
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
