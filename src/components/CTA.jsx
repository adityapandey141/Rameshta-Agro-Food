"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import ReadytoDig from "../assets/Ready to Dig In.webp";

const CTA = () => {
  return (
    <div className="relative w-full bg-gray-100 flex items-center overflow-hidden px-5 md:px-35">
      <div className="mx-auto  py-12 sm:py-16 md:py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-2 z-1 md:text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold  mb-3 ">
              Ready to Dig In?
            </h2>
            <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto font-roboto">
              Whether you’re looking to farm better, buy better, or invest in
              something that matters, we’re here.
            </p>
          </div>

          <div>
            <Link
              href="/contact-us"
              className="mt-4 inline-block px-6  py-2 md:py-2 border-2 border-grey-900 text-black rounded-[8px] hover:bg-lg hover:text-white transition-all duration-300 text-md "
            >
              GROW WITH US
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
          <Image
            src={ReadytoDig}
            alt="dig"
            className="object-cover rounded-lg w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
