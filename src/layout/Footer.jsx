import React from "react";
import Image from "next/image";
import RameshtaOrganicsLogo from "../assets/Ramestha Logo.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] text-black py-6 md:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <Image
              src={RameshtaOrganicsLogo}
              alt="Rameshta Organics Logo"
              className="object-contain w-[80%]"
              priority
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 ">
              {[
                { href: "/", label: "Home" },
                { href: "/#about-us", label: "About Us" },
                { href: "/#why-us", label: "Why Us" },
                { href: "/#services", label: "Services" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-dg transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 ">
              Get In Touch
            </h3>
            <div className="space-y-4 ">
              <div className="flex items-center">
                <FaPhoneAlt className="  mr-3" size={20} />
                <a href="tel:+919824670208" className="hover:text-dg">
                  +91 9824670208
                </a>
              </div>
              <div className="flex items-center">
                <MdEmail className=" mr-3" size={22} />
                <a
                  href="mailto:rameshtaorganic@gmail.com"
                  className="hover:text-dg break-all"
                >
                  rameshtaorganic@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <IoLocationSharp className="  mr-3 mt-1" size={24} />
                <a
                  href="https://www.google.com/maps/search/B-10%2C+Anand+Dham+Residency%2C+Paliyad+Road%2C+Botad"
                  className="hover:text-dg break-all"
                >
                  B-10, Anand Dham Residency, Paliyad Road,
                  <br />
                  Botad – 364710, Gujarat, India
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-dg text-900">
          <p className="text-dg font-semibold">
            © {new Date().getFullYear()} Rameshta Agro & Food Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
