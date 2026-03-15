"use client";

import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const meals = [
  { title: "Classic Chicken Adobo", desc: "The soul of the Philippines. Tender chicken braised in vinegar, soy sauce, and garlic." },
  { title: "Beef Sinigang", desc: "A sour, savory, and heart-warming tamarind soup that defines Filipino comfort." },
  { title: "Pork Sisig", desc: "Crispy, sizzled perfection. A punch of citrus and chili in every bite." },
  { title: "Bicol Express", desc: "Creamy coconut milk meets spicy chili for a Bicolano favorite." },
  { title: "Beef Kalderetapa", desc: "Rich tomato-based stew with hearty vegetables and tender beef." }
];

export const Signatures: React.FC = () => {
  return (
    <section id="signatures" className="w-full bg-[#B50418] py-24 lg:py-32 rounded-t-[3rem] overflow-hidden">
      {/* Centered Header Content */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white font-display leading-[1.1]">
              Explore Meal Kits in the Timpla App.
            </h2>
            <p className="text-white/80 mt-4 text-lg">
              Discover and order your favorite dishes with ease, right from your phone.
            </p>
        </div>
      </div>
      
      {/* Full-Width Carousel Container */}
      <div className="w-full relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 md:px-[calc((100vw-min(80rem,100vw-3rem))/2)] hide-scrollbar">
          {meals.map((meal, index) => (
            <div 
              key={index} 
              className="min-w-[280px] md:min-w-[380px] bg-white rounded-3xl p-6 flex flex-col gap-4 snap-center shrink-0 shadow-2xl transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <ImagePlaceholder 
                    text={meal.title} 
                    className="w-full h-full" 
                    aspectRatio="aspect-auto" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#343132]">
                    {meal.title}
                </h3>
                <p className="text-[#343132]/80 text-sm leading-relaxed">
                  {meal.desc}
                </p>
              </div>
              <button className="mt-auto w-full text-center bg-[#D52A28] text-white py-3 rounded-full font-bold hover:bg-[#B50418] transition-colors">
                Order in App
              </button>
            </div>
          ))}
          {/* Spacer for the last card to allow snapping to center/end properly */}
          <div className="min-w-[6rem] shrink-0" />
        </div>
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
