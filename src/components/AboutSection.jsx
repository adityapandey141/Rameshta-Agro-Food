"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import WHOWEARE from "../assets/We Stand with Farmers. And the Future.webp";
import TImage from "../assets/TImage.jpg";

export default function AboutSection() {
  return (
    <section
      className="w-full relative py-10  md:py-20 px-5 md:px-35 overflow-hidden "
      id="about-us"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image src={TImage} alt="Agro" fill className="object-cover" priority />
      </div>

      <div className=" mx-auto  relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-10 lg:gap-12">
          <div className="w-full lg:w-1/3 md:text-center lg:text-left space-y-3  sm:space-y-6">
            <p className="text-gray-600 text-xl max-w-3xl mx-auto font-normal">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl  md:mb-3  font-bold">
              We Stand with Farmers. And the Future.
            </h2>
          </div>

          <div className="w-full lg:w-1/3 flex md:justify-center">
            <div className="border-4 border-lg  rounded-md">
              <div className="relative w-56 h-48 sm:w-72 sm:h-64 lg:w-90 lg:h-80">
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
            <p className="text-gray-600 text-xl max-w-3xl mx-auto font-normal">
              At Rameshta, we’re not another agri-company; we’re a movement that
              puts the farmer first. We roll up our sleeves, walk into the
              fields, and build organically from the ground up. From fair
              pricing to end-to-end support, we do the hard work so our farmers
              can thrive and so can your plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
