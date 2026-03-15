import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const items = [
  {
    title: "Masarap (Taste)",
    desc: "Every dish is chef-crafted to deliver a restaurant-quality experience in your own kitchen.",
    imageText: "Authentic cooked dish tight shot"
  },
  {
    title: "Mura (Affordability)",
    desc: "Pre-portioned ingredients reduce waste and save you money compared to grocery shopping.",
    imageText: "Fresh ingredients composition"
  },
  {
    title: "Madali (Convenience)",
    desc: "Follow simple, app-guided steps to prep and cook a full Filipino feast in under 30 minutes.",
    imageText: "Easy prep / app cooking interface shot"
  }
];

export const ValueGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFBEB] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#343132] font-display">
            The Timpla Promise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-6 group">
              <div className="w-full aspect-square overflow-hidden rounded-3xl shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                <ImagePlaceholder 
                  text={item.imageText} 
                  className="w-full h-full transform group-hover:scale-105 transition-transform duration-700" 
                  aspectRatio="aspect-square" 
                />
              </div>
              <div className="flex flex-col gap-2 max-w-[280px]">
                <h3 className="text-xl font-bold text-[#343132]">
                  {item.title}
                </h3>
                <p className="text-[#343132]/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
