"use client";
import Image from "next/image";
import CONTACTUS from "../../assets/CONTACTUS.jpg"; // Make sure this image is high-resolution

const ContactUsHeader = () => {
  return (
    <header className="w-full relative mb-[70px]">
      {/* Background Image Container */}
      <div className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative overflow-hidden rounded-xl">
        <Image
          src={CONTACTUS}
          alt="Special Contact Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full text-white p-4 sm:p-6 md:p-8">
        <div className="w-full h-full flex justify-center items-center text-center px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 sm:mt-6">
              CONTACT US
            </h1>
            <p className="mt-4 text-base sm:text-2xl max-w-xl mx-auto">
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
