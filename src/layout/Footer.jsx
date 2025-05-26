
import React from 'react';
import Image from 'next/image';
import RameshtaOrganicsLogo from '../assets/RameshtaOrganicsLogo.png';
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#1F0B01] text-white py-6 md:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        
          <div>
            <Image
              src={RameshtaOrganicsLogo}
              alt="Rameshta Organics Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>

        
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Useful Links</h3>
            <ul className="space-y-2 text-lg">
              {[
                { href: '/', label: 'Home' },
                { href: '/#about', label: 'About Us' },
                { href: '/#whyus', label: 'Why Choose' },
                { href: '/#founder', label: 'Founders' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-500 transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Get In Touch</h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-center">
                <FaPhoneAlt className="text-yellow-500 mr-3" size={20} />
                <a href="tel:+919824670208" className="hover:text-yellow-500">
                  +91 9824670208
                </a>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-yellow-500 mr-3" size={22} />
                <a
                  href="mailto:rameshtaorganic@gmail.com"
                  className="hover:text-yellow-500 break-all"
                >
                  rameshtaorganic@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <IoLocationSharp className="text-yellow-500 mr-3 mt-1" size={24} />
                <a
                  href="https://www.google.com/maps/search/B-10%2C+Anand+Dham+Residency%2C+Paliyad+Road%2C+Botad"
                  className="hover:text-yellow-500 break-all"
                >
                  B-10, Anand Dham Residency, Paliyad Road,<br />
                  Botad – 364710, Gujarat, India
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-yellow-500 transition" size={30} />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-yellow-500 transition" size={30} />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-yellow-500 transition" size={30} />
              </a>
            </div>
          </div>
        </div>

    
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-lg">
          © {new Date().getFullYear()} Rameshta Agro & Food Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
