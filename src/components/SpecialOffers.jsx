import Image from 'next/image';
import React from 'react';
import Livestock from '../assets/Livestock.png';
import Garden from '../assets/Garden.png';
import FreshFruit from '../assets/FreshFruit.png';
import Vegetables from '../assets/Vegetables.png';
import Wheats from '../assets/Wheats.png';
import AgroMachine from '../assets/AgroMachine.png';

const SpecialOffers = () => {
  const categories = [
    { id: 1, title: "Fruits", icon: Livestock },
    { id: 2, title: "Vegetables", icon: Vegetables },
    { id: 3, title: "Cereals", icon: FreshFruit },
    { id: 4, title: "Pulses", icon: Wheats },
    { id: 5, title: "Spices", icon: Garden },
    { id: 6, title: "Condiments", icon: AgroMachine },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 w-full ">
     
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
        REAL FOOD. ROOTED IN PURPOSE.
        </h2>
        <p className="text-gray-600 text-lg font-semibold max-w-2xl mx-auto">
          Every grain, every veggie, every spice — grown with care and a commitment to clean, chemical-free farming.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center text-center">
          
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-gray-100 hover:scale-105 transition-transform duration-300 mb-3">
              <Image 
                src={category.icon}
                alt={category.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
           
            <h3 className="text-xl font-semibold text-gray-700">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
