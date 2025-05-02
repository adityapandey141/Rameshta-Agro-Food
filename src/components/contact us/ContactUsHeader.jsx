"use client";
import Image from "next/image";
import CONTACTUS from "../../assets/CONTACTUS.jpg"; 
const ContactUsHeader = () => {
  return (
    <header className="w-full relative mb-[70px]">

      <div className="w-full h-[400px] relative">
        <Image
          src={CONTACTUS}
          alt="Franch"
          layout="fill" 
          objectFit="cover" 
          className="rounded-xl"
        />
      </div>

    
      <div className="absolute top-0 left-0 w-full h-full text-white p-4 sm:p-6 md:p-8">
        <div className="w-full h-full flex justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 sm:mt-6">
              CONTACT US
            </h1>
            <p className="mt-4  text-white text-base sm:text-xl max-w-xl mx-auto">
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using "Content here, content
              here", making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactUsHeader;
