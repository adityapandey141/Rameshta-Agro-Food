"use client";
import React from "react";
import Image from "next/image";
import Founder4 from "../assets/Founder4.jpg";
import Founder5 from "../assets/Founder5.jpg";

const Founders = () => {
  const teamMembers = [
    {
      name: "Mukeshkumar",
      title: "Mukeshkumar Natvarlal Fatepura (Director)",
      image: Founder4,
      bio: "Mukeshkumar leads Rameshta with a mission to rebuild Indian agriculture. He’s a hands-on change-maker, driving innovation, farmer empowerment, and strategic growth.",
    },
    {
      name: "Sajjanben",
      title: "Sajjanben Amaratbhai Parmar (Director)",
      image: Founder5,
      bio: "She champions rural upliftment and fair trade, ensuring that sustainability never comes at the cost of the farmer. Her leadership is grounded in purpose and backed by action.",
    },
    {
      name: "Taliya Rameshbhai Bachubhai",
      title: "Taliya Rameshbhai Bachubhai (Director)",
      image: Founder5,
      bio: "Rameshbhai plays a key role in keeping things running smoothly. From planning to daily operations, he makes sure our support reaches farmers on time and in the right way. Reliable, practical, and always focused on the bigger picture.",
    },
  ];

  return (
    <section
      className="py-16 relative overflow-hidden bg-gray-50 px-5 md:px-35"
      id="founder"
    >
      <div className=" mx-auto  relative z-10">
        <div className="md:text-center md:mb-12">
          <p className="text-gray-600 text-base max-w-3xl mx-auto font-normal">
            Meet the Strategic Minds
          </p>
          <h2 className="text-3xl md:text-5xl font-bold my-4 ">
            Leaders Who Don’t Sit at Desks But Walk the Fields
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group bg-white pb-3">
              <div className="w-full h-70 relative rounded-lg overflow-hidden mb-4 ">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black transition-colors duration-300 px-2">
                {member.title}
              </h3>
              {/* <p className="text-xl px-2 text-grey-500 mb-2 relative inline-block font-poppins before:absolute before:inset-0 before:-z-10  before:rounded before:scale-110 before:blur-sm">
                {member.title}
              </p> */}
              <p className="text-gray-600  px-2 text-base text-center  mx-auto font-roboto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
