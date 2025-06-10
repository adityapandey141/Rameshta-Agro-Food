"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import TrainingKnowledgeSharing from "../assets/TrainingKnowledgeSharing.jpg";
import QualityResourcesInfrastructure from "../assets/QualityResourcesInfrastructure.jpg";
import FairTradeMarketAccess from "../assets/FairTradeMarketAccess.jpg";
import Laboratory from "../assets/Laboratory image.webp";

const BlogPosts = [
  {
    id: 1,
    date: { day: 1 },
    title: "Training & Knowledge Sharing",
    excerpt:
      "We empower farmers through practical training programs that make transitioning to organic farming seamless and effective. Our experts share both traditional wisdom and modern sustainable practices.",
    image: TrainingKnowledgeSharing,
    slug: "tips-for-ripening-fruit",
  },
  {
    id: 2,
    date: { day: 2 },
    title: "Quality Resources & Infrastructure",
    excerpt:
      "From premium organic seeds to natural fertilisers, we ensure farmers can access everything they need. Our support spans the entire journey, from soil preparation to storage solutions that preserve freshness and quality.",
    image: QualityResourcesInfrastructure,
    slug: "health-benefits-raw-food",
  },
  {
    id: 3,
    date: { day: 3 },
    title: "Fair Trade & Market Access",
    excerpt:
      "We eliminate middlemen and connect farmers directly to markets, ensuring they receive fair prices for their hard work. Our transparent pricing mechanisms provide stability and encourage long-term commitment to organic practices.",
    image: FairTradeMarketAccess,
    slug: "superfoods-you-should-be-eating",
  },
  {
    id: 4,
    date: { day: 4 },
    title: "Soil Laboratory",
    excerpt:
      "Healthy crops start with healthy soil. That’s why we offer free soil testing for farmers with a government farming card because the government covers the cost, and we make sure the benefit reaches the right hands. Smarter farming starts with knowing your land.",
    image: Laboratory,
    slug: "superfoods-you-should-be-eating",
  },
];

const SolutionSection = () => {
  return (
    <section
      className="w-full relative py-12 px-5 md:px-35  md:py-12 overflow-hidden"
      id="services"
    >
      <div className="md:text-center mb-4 md:mb-12">
        <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto font-normal">
          What We Do
        </p>
        <h2 className="text-3xl md:text-5xl font-bold  mt-2 md:mt-4 md:mb-4 ">
          Support That’s More Than Just Talk
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {BlogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-md overflow-hidden transition duration-300 group hover:shadow-lg"
          >
            <div className="relative w-full h-56 sm:h-60 lg:h-60">
              <div className="absolute top-0 left-0 bg-yellow-300 text-center p-1 w-16 h-16 flex flex-col justify-center z-20">
                <span className="text-2xl font-bold font-poppins">
                  {post.date.day}
                </span>
                <span className="text-xs font-roboto">{post.date.month}</span>
              </div>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className=" p-2 md:p-4 transition duration-300 ease-in-out">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800    font-poppins">
                {post.title}
              </h3>

              <p className="text-gray-600 ">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
