"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AgroLogo from "../assets/AgroLogo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');

      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        mobileMenuButton &&
        !mobileMenuButton.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={AgroLogo}
            alt="Logo"
            width={90}
            height={90}
            className="object-contain "
          />
        </Link>

        <nav className="hidden md:flex space-x-12">
          <Link href="/" className="text-yellow-500 hover:text-[#FF6900] font-bold transition-colors duration-200">
            HOME
          </Link>
          <Link href="about-us" className="text-gray-500 hover:text-[#FF6900] font-bold transition-colors duration-200">
            ABOUT US
          </Link>
          <Link href="why-choose" className="text-gray-500 hover:text-[#FF6900] font-bold transition-colors duration-200">
            WHY CHOOSE
          </Link>
          <Link href="founder" className="text-gray-500 hover:text-[#FF6900] font-bold transition-colors duration-200">
            FOUNDERS
          </Link>
          <Link href="contact-us" className="text-gray-500 hover:text-[#FF6900] font-bold transition-colors duration-200">
            CONTACT
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us" className="bg-yellow-400 hover:bg-orange-500 text-gray-800 font-medium py-2 px-4 rounded transition-all duration-300 hover:shadow-md">
            GET IN TOUCH
          </Link>
        </div>

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-800 hover:text-gray-600 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md z-20 max-h-screen overflow-y-auto"
        >
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/about-us" className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              ABOUT US
            </Link>
            <Link href="/why-choose" className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              WHY CHOOSE
            </Link>
            <Link href="/founder" className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              FOUNDERS
            </Link>
            <Link href="/contact-us" className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
            <Link href="/contact-us" className="block px-3 py-2 bg-yellow-400 text-gray-800 hover:bg-yellow-500 rounded text-center font-medium mt-4 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
