"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ORGANICLOGO from "../assets/ORGANICLOGO.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] mb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={ORGANICLOGO}
          alt="Agro"
          fill
          className="object-cover "
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col justify-center text-white text-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-poppins leading-tight max-w-3xl mx-auto">
            ORGANIC STARTS HERE. <b/>WITH US. WITH YOU.
          </h1>

          <p className="mb-8 text-2xl max-w-2xl font-roboto">
            At Rameshta Agro, we back the farmers, skip the middlemen, and make organic farming a win for everyone.
            Cleaner soil. Healthier food. Fairer trade.
          </p>

          <Link href="/contact-us">
            <button
              className="px-6 py-4 bg-[#16A34A] text-white text-[18.8px] leading-[25px] font-bold font-raleway rounded-[25px] hover:bg-[#128038] transition-all duration-300 w-[331px] h-[61px] text-center"
            >
              LET’S GROW BETTER
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
