"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ORGANICLOGO from "../assets/Home Banner.webp";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const words = ["ITH YOU.", "ITH US."];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] mb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={ORGANICLOGO}
          alt="Agro"
          fill
          className="object-cover "
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/65 z-10" />

      <div className="relative z-20 flex flex-col justify-center text-white text-center h-full px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl text-white font-[600]">
            ORGANIC STARTS HERE. <br />
            <span className="font-[900]  px-5 mt-5"> W{text}</span>
          </h1>

          <p className="mb-8 text-xl max-w-2xl font-roboto">
            <span className="text-xl font-900 bg-lg">At Rameshta Agro</span> we
            back the farmers, skip the middlemen, and make organic farming a win
            for everyone. Cleaner soil. Healthier food. Fairer trade.
          </p>

          <Link href="/contact-us">
            <button className="px-6 py-3 bg-dg text-white text-md  font-bold rounded-[8px] hover:bg-lg transition-all duration-300  text-center cursor-pointer">
              LET’S GROW BETTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
