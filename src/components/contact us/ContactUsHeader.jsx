"use client";
import Image from "next/image";
import special from "../../assets/special.jpg";

const ContactUsHeader = () => {
  return (
    <header className="w-full relative bg-[#0E1A27] mb-[70px]">
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative rounded-xl overflow-hidden">
        <Image
          src={special}
          alt="Special Contact Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full text-white p-4 sm:p-6 md:p-8">
        <div className="w-full h-full flex justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 sm:mt-6">
              CONTACT US
            </h1>
            <p className="mt-4 text-base sm:text-lg  max-w-xl mx-auto">
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using "Content here, content here", making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactUsHeader;
