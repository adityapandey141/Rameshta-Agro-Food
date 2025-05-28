"use client";

import React from "react";
import Image from "next/image";
import CommitmenttoSustainability from "../assets/CommitmenttoSustainability.svg";
import EndSupport from "../assets/EndSupport.svg";
import QualityAssurance from "../assets/QualityAssurance.svg";
import CommunityEmpowerment from "../assets/CommunityEmpowerment.svg";

const offerCategories = [
  {
    title: "Commitment to Sustainability",
    icon: CommitmenttoSustainability,
    description:
      "Every decision we make considers its impact on soil health, biodiversity, and the environment. Our practices restore nature's balance rather than depleting it.",
  },
  {
    title: "End-to-End Support",
    icon: EndSupport,
    description:
      "We stand with our farmers throughout their organic journey, providing assistance from seed selection to market linkage, ensuring success at every step.",
  },
  {
    title: "Quality Assurance",
    icon: QualityAssurance,
    description:
      "Our organic products boast 80-100% germination rates and meet the highest standards of purity and nutrition. We never compromise on quality.",
  },
  {
    title: "Community Empowerment",
    icon: CommunityEmpowerment,
    description:
      "With an impressive 80-95% farmer retention rate, we're building lasting relationships based on trust, fair treatment, and shared success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-5 md:py-12 px-5 max-w-7xl mx-auto font-roboto"
      id="why-us"
    >
      <div className="md:text-center mb-5 md:mb-12">
        <h2 className="text-3xl md:text-5xl  font-bold md:mb-4 ">
          The Rameshta Advantage
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {offerCategories.map((category, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-16 h-16 flex-shrink-0 relative">
              <Image
                src={category.icon}
                alt={category.title}
                width={64}
                height={64}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold md:mb-4 font-poppins">
                {category.title}
              </h3>
              <p className="text-gray-600 ">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
