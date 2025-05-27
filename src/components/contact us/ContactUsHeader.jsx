"use client";
import Image from "next/image";
import CONTACTUS from "../../assets/Rameshta Agro.webp";
const ContactUsHeader = () => {
  return (
    <header className="w-full relative mb-[70px]">
      <div className="w-full h-[300px] relative ">
        <Image
          src={CONTACTUS}
          alt="Franch"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute inset-0 bg-black/35 z-10" />

      <div className="absolute top-0 left-0 w-full h-full text-white p-4 sm:p-6 md:p-8 z-11">
        <div className="w-full h-full flex justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mt-4 sm:mt-6 ">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactUsHeader;
