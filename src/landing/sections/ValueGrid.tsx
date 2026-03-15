import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const items = [
  {
    title: "Farm-Fresh Guarantee",
    desc: "Premium ingredients sourced directly from trusted farms, delivered fresh to maintain the highest quality.",
    imageText: "Farm-fresh ingredients"
  },
  {
    title: "Time-Saving Convenience",
    desc: "Skip the meal planning and grocery shopping. We handle everything so you can enjoy cooking without the stress.",
    imageText: "Convenient meal prep"
  },
  {
    title: "Tested & Perfected",
    desc: "Every recipe is carefully tested and perfected to guarantee delicious results every time you cook.",
    imageText: "Perfected recipe dish"
  }
];

export const ValueGrid: React.FC = () => {
  return (
    <section id="why-timpla" className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D52A28] font-bold tracking-widest uppercase text-sm mb-4 block">
            MURA, MADALI, MASARAP
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#343132] font-display max-w-2xl mx-auto">
            Restaurant-quality meals to your kitchen with zero stress.
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
