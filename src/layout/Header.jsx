
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import RameshtaOrganicsLogo1 from '../assets/RameshtaOrganicsLogo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      if (isMenuOpen && !menu.contains(event.target) && !button.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-3 md:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center">
          <Image src={RameshtaOrganicsLogo1} alt="Logo" width={120} height={112} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12 text-sm lg:text-base font-semibold">
          <Link href="/" className="text-yellow-500 hover:text-[#FF6900] transition-colors duration-200">HOME</Link>
          <a href="/about-us" className="text-gray-600 hover:text-[#FF6900]">ABOUT US</a>
          <a href="/product" className="text-gray-600 hover:text-[#FF6900]">PRODUCT</a>
          <a href="/quality" className="text-gray-600 hover:text-[#FF6900]">QUALITY</a>
          <Link href="/contact-us" className="text-gray-600 hover:text-[#FF6900]">CONTACT</Link>
        </nav>

        <div className="hidden md:block">
          <a href="/"  className="px-6 py-4 bg-[#16A34A] text-white text-[18.8px] leading-[25px] font-bold font-raleway rounded-[25px] hover:bg-[#128038] transition-all duration-300 w-[331px] h-[61px] text-center"
            >
            MAKE APPOINTMENT
          </a>
        </div>

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-800 hover:text-gray-600 p-2"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
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

     
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 pt-20`}
        style={{ top: isScrolled ? '56px' : '72px' }}
      >
        <div className="px-4 py-3 space-y-3 text-gray-800 font-sans font-medium">
          {['/', '/about-us', '/product', '/quality', '/contact-us'].map((path, i) => (
            <Link
              key={i}
              href={path}
              className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={handleLinkClick}
            >
              {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase().replace('-', ' ')}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="block w-full px-4 py-3 bg-yellow-400 hover:bg-orange-500 rounded-lg text-center transition-colors duration-200"
              onClick={handleLinkClick}
            >
              MAKE APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
