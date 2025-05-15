"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import RameshtaOrganicsLogo1 from "../assets/RameshtaOrganicsLogo1.png";

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
    // Prevent body scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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
      document.body.style.overflow = 'unset';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when clicking on a link with a hash
  const handleHashLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 w-full z-30 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-3 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={RameshtaOrganicsLogo1}
            alt="Rameshta Organics Logo"
            className="w-50  h-auto"
            priority
          />
        </Link>

        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          <Link href="/" className="text-yellow-500 hover:text-[#FF6900] font-bold text-sm lg:text-base transition-colors duration-200">
            HOME
          </Link>
          <a href="/#about" className="text-gray-500 hover:text-[#FF6900] font-bold text-sm lg:text-base transition-colors duration-200">
            ABOUT US
          </a>
          <a href="/#whyus" className="text-gray-500 hover:text-[#FF6900] font-bold text-sm lg:text-base transition-colors duration-200">
            WHY CHOOSE
          </a>
          <a href="/#founder" className="text-gray-500 hover:text-[#FF6900] font-bold text-sm lg:text-base transition-colors duration-200">
            FOUNDERS
          </a>
          <Link href="/contact-us" className="text-gray-500 hover:text-[#FF6900] font-bold text-sm lg:text-base transition-colors duration-200">
            CONTACT
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us" className="bg-yellow-400 hover:bg-orange-500 text-gray-800 font-medium py-2 px-4 rounded transition-all duration-300 hover:shadow-md text-sm lg:text-base">
            GET IN TOUCH
          </Link>
        </div>


        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-800 hover:text-gray-600 p-2 transition-colors duration-200"
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
        className={`md:hidden fixed inset-0 bg-white z-20 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20`}
        style={{ top: isScrolled ? '56px' : '72px' }}
      >
        <div className="px-4 py-3 space-y-3">
          <Link 
            href="/" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            HOME
          </Link>
          <a 
            href="/#about" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            ABOUT US
          </a>
          <a 
            href="/#whyus" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            WHY CHOOSE
          </a>
          <a 
            href="/#founder" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            FOUNDERS
          </a>
          <Link 
            href="/contact-us" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            onClick={handleHashLinkClick}
          >
            CONTACT
          </Link>
          <div className="pt-4">
            <Link 
              href="/contact-us" 
              className="block w-full px-4 py-3 bg-yellow-400 text-gray-800 hover:bg-orange-500 rounded-lg text-center font-medium transition-colors duration-200"
              onClick={handleHashLinkClick}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>

  
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;