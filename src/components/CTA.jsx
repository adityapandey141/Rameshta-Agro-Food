"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import RameshtaOrganicsLogo1 from "../assets/RameshtaOrganicsLogo1.png";
import ReadytoDig from "../assets/ReadytoDig.jpg"; 

const CTA = () => {
  return (
    <div className="relative w-full bg-gray-100 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-1/2 space-y-6 z-1 text-center md:text-left">
          <div className=" flex items-start justify-start">
            <div className="relative">
              <Image
                src={RameshtaOrganicsLogo1}
                alt="Logo"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>

          <div>
             <h2 className="text-3xl  font-bold text-black mb-3">
              Ready to Dig In?
              </h2>
            
            <p className="text-gray-600 mt-4 max-w-md text-lg mx-auto md:mx-0">
              Whether you’re looking to farm better, buy better, or invest in something that matters, we’re here.
            </p>
          </div>

          <div>
            <Link href="/contact-us">
              <span className="inline-block border-2 border-yellow-400 text-gray-800 text-sm font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
                GROW WITH US
              </span>
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
   
          <div className="absolute left-1/3 top-1/3 bg-yellow-300 rounded-full w-36 h-36 flex items-center justify-center shadow-lg">
            <div className="flex items-start space-x-2">
              <span className="text-5xl font-bold text-gray-800">1</span>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-gray-800">50$</span>
                <span className="text-2xl font-bold text-yellow-600">Kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
