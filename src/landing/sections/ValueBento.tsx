import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const ValueBento: React.FC = () => {
  return (
    <section className="bg-bg-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main vertical card - Masarap */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <ImagePlaceholder text="Close-up: Mouth-watering Adobo" className="w-full h-full" aspectRatio="aspect-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-8">
              <div className="mt-auto">
                <span className="text-primary-dark font-black text-sm uppercase tracking-widest bg-white px-3 py-1 rounded-full mb-4 inline-block">
                  Masarap (Taste)
                </span>
                <h3 className="text-white text-3xl font-black">Chef-Crafted Flavors</h3>
              </div>
            </div>
          </div>

          {/* Mura Card */}
          <div className="relative group overflow-hidden rounded-[2rem] bg-white shadow-lg p-8 flex flex-col">
            <span className="text-primary font-black text-sm uppercase tracking-widest mb-4">
              Mura (Affordability)
            </span>
            <h3 className="text-text-dark text-2xl font-black mb-4">Save on Groceries</h3>
            <p className="text-neutral-500 font-medium">Pre-portioned ingredients mean zero waste and better value.</p>
            <div className="mt-auto opacity-20 transform translate-y-1/4 translate-x-1/4">
               <div className="w-32 h-32 border-4 border-primary rounded-full" />
            </div>
          </div>

          {/* Madali Card */}
          <div className="relative group overflow-hidden rounded-[2rem] bg-primary text-white shadow-lg p-8 flex flex-col">
            <span className="text-white/60 font-black text-sm uppercase tracking-widest mb-4">
              Madali (Convenience)
            </span>
            <h3 className="text-white text-2xl font-black mb-4">Cook in 30 Mins</h3>
            <p className="opacity-90 font-medium">Follow simple steps on the app and enjoy a home-cooked meal.</p>
            <div className="mt-auto pt-4">
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
