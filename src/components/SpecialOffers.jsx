import Image from "next/image";
import React from "react";
import Fruits from "../assets/Fruits.svg";
import Spices from "../assets/Spices.svg";
import Cereals from "../assets/Cereals.svg";
import Vegetables from "../assets/Vegetables.svg";
import Pulses from "../assets/Pulses.svg";
import Condiments from "../assets/Condiments.svg";

const SpecialOffers = () => {
  const categories = [
    { id: 1, title: "Fruits", icon: Fruits },
    { id: 2, title: "Vegetables", icon: Vegetables },
    { id: 3, title: "Cereals", icon: Cereals },
    { id: 4, title: "Pulses", icon: Pulses },
    { id: 5, title: "Spices", icon: Spices },
    { id: 6, title: "Condiments", icon: Condiments },
  ];

  return (
    <section className="font-sans py-12 px-5 md:px-35 w-full mt-[-80px]">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl md:text-5xl mb-3 font-bold">
          REAL FOOD. ROOTED IN PURPOSE.
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto font-normal">
          Every grain, every veggie, every spice, grown with care and a
          commitment to clean, chemical-free farming.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center font-medium"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-gray-100 hover:scale-105 transition-transform duration-300 mb-3">
              <Image
                src={category.icon}
                alt={category.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
