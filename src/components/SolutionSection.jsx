"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import diet from "../assets/Diet.jpg";
import OrganicFood from "../assets/OrganicFood.jpg";
import DietFood from "../assets/DietFood.jpg";

const BlogPosts = [
  {
    id: 1,
    date: { day: 3, month: "Dec" },
    categories: ["DIET", "TIPS & GUIDES"],
    title: "Training & Knowledge Sharing",
    excerpt:
      "We empower farmers through practical training programs that make transitioning to organic farming seamless and effective. Our experts share both traditional wisdom and modern sustainable practices.",
    image: diet,
    slug: "tips-for-ripening-fruit",
  },
  {
    id: 2,
    date: { day: 3, month: "Dec" },
    categories: ["ORGANIC FOOD", "TIPS & GUIDES"],
    title: "Quality Resources & Infrastructure",
    excerpt:
      "From premium organic seeds to natural fertilisers, we ensure farmers can access everything they need. Our support spans the entire journey, from soil preparation to storage solutions that preserve freshness and quality.",
    image: OrganicFood,
    slug: "health-benefits-raw-food",
  },
  {
    id: 3,
    date: { day: 2, month: "Dec" },
    categories: ["DIET", "ORGANIC FOOD"],
    title: "Fair Trade & Market Access",
    excerpt:
      "We eliminate middlemen and connect farmers directly to markets, ensuring they receive fair prices for their hard work. Our transparent pricing mechanisms provide stability and encourage long-term commitment to organic practices.",
    image: DietFood,
    slug: "superfoods-you-should-be-eating",
  },
];

const SolutionSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Do</h2>
        <p className="text-gray-500 max-w-3xl text-lg mx-auto">Support That’s More Than Just Talk</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {BlogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-md overflow-hidden transition duration-300 group hover:shadow-lg"
          >
          
            <div className="relative w-full h-56 sm:h-60 lg:h-72">
              <div className="absolute top-0 left-0 bg-yellow-300 text-center p-2 w-16 h-16 flex flex-col justify-center z-20">
                <span className="text-2xl font-bold">{post.date.day}</span>
                <span className="text-xs">{post.date.month}</span>
              </div>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            
            <div className="p-6 transition duration-300 ease-in-out">
             
              <div className="flex flex-wrap text-sm sm:text-lg mb-3">
                {post.categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <span className="text-yellow-500 group-hover:text-green-600 transition-colors duration-300">
                      {category}
                    </span>
                    {index < post.categories.length - 1 && (
                      <span className="mx-2 text-yellow-500">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

         
              <p className="text-gray-600 text-lg mb-6 transition duration-300 group-hover:scale-[1.02] cursor-pointer">
                {post.excerpt}
              </p>

             
              <Link href="/contact-us">
                <span className="inline-block border border-yellow-400 text-gray-700 hover:bg-yellow-400 hover:text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium transition duration-300 cursor-pointer">
                  READ MORE
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
