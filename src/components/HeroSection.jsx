"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeImages from "../assets/HomeImages.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] mb-20 overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <Image
          src={HomeImages}
          alt="Agro"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 z-10" />

      
      <div className="relative z-20 flex flex-col justify-center text-white text-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          ORGANIC STARTS HERE.
          WITH US.
          WITH YOU.
          </h1>

          <p className="mb-8 text-lg max-w-2xl">
            At Rameshta Agro, we back the farmers, skip the middlemen, and make organic farming a win for everyone. Cleaner soil. Healthier food. Fairer trade.
          </p>
          <Link href="/contact-us">
            <span className="inline-block border-2 border-white px-6 sm:px-10 py-2 sm:py-3 md:px-12 md:py-4 rounded-full hover:bg-white hover:text-amber-800 transition-colors duration-300 text-lg font-medium">
              Let’s Grow Better
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
