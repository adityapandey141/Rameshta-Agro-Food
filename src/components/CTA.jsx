"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ReadytoDig from "../assets/ReadytoDig.jpg";

const CTA = () => {
  return (
    <div className="relative w-full bg-gray-100 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">

       
        <div className="md:w-1/2 space-y-6 z-1 text-center md:text-left">

          <div>
            <h2 className="text-3xl font-bold text-black mb-3 font-poppins">
              Ready to Dig In?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto font-roboto">
              Whether you’re looking to farm better, buy better, or invest in something that matters, we’re here.
            </p>
          </div>

          <div>
             <Link
            href="/contact-us"
            className="mt-4 inline-block px-6 md:px-8 py-2 md:py-3 border-2 border-grey-900 text-black rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 text-lg md:text-2xl"
          >
             GROW WITH US
          </Link>

          </div>
        </div>

     
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <Image
            src={ReadytoDig}
            alt="dig"
            className="object-contain rounded-lg w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
