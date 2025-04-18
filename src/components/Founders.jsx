"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Founder4 from '../assets/founder4.jpg';
import Founder5 from '../assets/founder5.jpg';

const Founders = () => {
  const teamMembers = [
    {
      name: "Mukeshkumar",
      title: "Mukeshkumar Natvarlal Fatepura (Director)",
      image: Founder4,
      bio: "Mukeshkumar leads Rameshta with a mission to rebuild Indian agriculture. He’s a hands-on change-maker, driving innovation, farmer empowerment, and strategic growth."
    },
    {
      name: "Sajjanben",
      title: "Sajjanben Amaratbhai Parmar (Director)",
      image: Founder5,
      bio: "She champions rural upliftment and fair trade, ensuring that sustainability never comes at the cost of the farmer. Her leadership is grounded in purpose and backed by action."
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Meet the Strategic Minds
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Leaders Who Don’t Sit at Desks But Walk the Fields
          </p>
        </div>

  <div className="relative group transition-transform duration-500 hover:scale-[1.01] hover:rotate-[0.2deg]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.6 }}
        className="relative group/card rounded-lg shadow-lg bg-white p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
      >
        <div className="w-full h-80 relative rounded-lg overflow-hidden mb-4 bg-white">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain transition-transform duration-300 group-hover/card:scale-105 rounded-lg"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 group-hover/card:text-yellow-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="relative inline-block text-yellow-600 font-semibold mb-2 before:absolute before:inset-0 before:-z-10 before:bg-yellow-100 before:rounded before:scale-110 before:blur-sm">
          {member.title}
        </p>
        <p className="text-gray-600 text-sm text-center max-w-md mx-auto">
          {member.bio}
        </p>
      </motion.div>
    ))}
  </div>
</div>

</div>
</section>
  );
};

export default Founders;
