import React from 'react';
import Image from 'next/image';
import RameshtaOrganicsLogo from "../assets/RameshtaOrganicsLogo.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#1F0B01] text-white py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
     
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src={RameshtaOrganicsLogo}
                alt="Logo"
                width={200}
                height={200}
                className="object-contain "
                priority
              />
             
            </div>
           
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl  font-bold mb-4 md:mb-6">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-yellow-500 transition duration-300 text-xl">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/#about" className="hover:text-yellow-500 transition duration-300 text-xl">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/#whyus" className="hover:text-yellow-500 transition duration-300 text-xl">
                  WhyChoose
                </a>
              </li>
              <li className="mb-2">
                <a href="/#founder" className="hover:text-yellow-500 transition duration-300 text-xl">
                  Founders
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="hover:text-yellow-500 transition duration-300 text-xl">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 md:mb-6 ">Get In Touch</h3>
            <div className="flex items-center mb-3 md:mb-4">
              <FaPhoneAlt className=" text-yellow-500 mr-2 flex-shrink-0" size={28} /> 
              <a href="+91 9824670208" className="text-[#ffffff] hover:text-yellow-500  text-lg transition-colors">
              +91 9824670208             
              </a>
            </div>

            <div className="flex items-center mb-3 md:mb-4">
              <MdEmail className="text-yellow-500 mr-2 flex-shrink-0" size={28} /> 
              <a href="mailto: rameshtaorganic@gmail.com" className="text-lg text-[#ffffff] hover:text-yellow-500 transition-colors break-all">
              rameshtaorganic@gmail.com 
              </a>
            </div>

            <div className="flex items-center mb-4 md:mb-6">
              <IoLocationSharp className=" text-yellow-500 mr-2 flex-shrink-0" size={28} /> 
              <a 
                href="https://www.google.com/maps/search/B-10%2C+Anand+Dham+Residency%2C+Paliyad+Road%2C+Botad" 
                className="text-lg text-[#ffffff] hover:text-yellow-500  transition-colors break-all"
              >
               B-10, Anand Dham Residency, Paliyad Road, 
               Botad – 364710, Gujarat, India

              </a>
            </div>
        </div>
        <div className="mb-6 md:mb-0 flex flex-col">
            <h4 className="text-2xl font-bold mb-4 md:mb-6">Social</h4>
            <div className="flex items-center space-x-4 ">
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className=" hover:bg-[#EAA10B] " size={35} /> 
              </a>

              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className=" hover:bg-[#EAA10B]" size={35} /> 
              </a>

              <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:bg-[#EAA10B]" size={35} /> 
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-lg text-center w-full">
          © {new Date().getFullYear()} Rameshta Agro & Food Pvt. Ltd. All rights reserved.
          </p>
        </div>
        </div>
     
    </footer>
  );
};

export default Footer;
