"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WHOWEARE from '../assets/WHOWEARE.jpg'; 
import TImage from "../assets/TImage.jpg";

export default function AboutSection() {
  return (
    <section className="w-full relative py-12 sm:py-16 lg:py-20 overflow-hidden " id="about">
  
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src={TImage}
          alt="Agro"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">

          <div className="w-full lg:w-1/3 text-center lg:text-left space-y-6 sm:space-y-8">
            <h2 className="text-3xl  font-bold text-black">WHO WE ARE</h2>
            <h3 className="text-gray-600 text-xl font-semibold ">We Stand with Farmers. And the Future.</h3>
            <Link href="/contact-us">
              <div className="inline-block border-2 border-yellow-400 text-sm text-gray-700  py-2 px-6 sm:px-8 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300 cursor-pointer">
                MORE ABOUT 
              </div>
            </Link>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="border-4 border-yellow-400 p-2 rounded-md">
              <div className="relative w-56 h-48 sm:w-72 sm:h-64 lg:w-80 lg:h-72">
                <Image
                  src={WHOWEARE}
                  alt="Wheat grains in burlap sack with wheat stalks"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </div>
          </div>

         
          <div className="w-full lg:w-1/3">
            <p className="text-gray-700  text-base leading-relaxed text-center lg:text-left">
              At Rameshta, we’re not just another agri-company; we’re a movement that puts the farmer first. We roll up our sleeves, walk into the fields, and build organically from the ground up. From fair pricing to end-to-end support, we do the hard work so our farmers can thrive — and so can your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
