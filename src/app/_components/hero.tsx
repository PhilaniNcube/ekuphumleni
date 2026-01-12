import React from 'react'
import Image from 'next/image'

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
      <div className="flex flex-col justify-center w-full lg:w-2/3 p-8 lg:p-16">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Ekuphumleni Logo"
            width={620}
            height={476}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
          Welcome to Ekuphumleni
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Your sanctuary for peace and relaxation. Experience the comfort you deserve.
        </p>
      </div>
    </section>
  )
}

export default Hero