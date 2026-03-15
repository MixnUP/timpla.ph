import React from 'react';
import { AppBadge } from '../components/AppBadge';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#FFFBEB] flex items-center pt-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">
        {/* Left Column (Typography Focus) */}
        <div className="flex flex-col gap-6 max-w-xl z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#343132] font-display leading-[1.1] tracking-tighter">
            The Authentic Filipino <span className="text-primary italic">Meal Kit.</span>
          </h1>
          <p className="text-lg text-[#343132]/80 font-sans leading-relaxed">
            Pre-portioned ingredients. Chef-crafted recipes. Download the Timpla app to cook your favorite &apos;Pinas classics in under 30 minutes.
          </p>
          
          <div className="flex flex-row gap-4 mt-4">
            <AppBadge type="appstore" className="h-12 w-auto object-contain" />
            <AppBadge type="googleplay" className="h-12 w-auto object-contain" />
          </div>
        </div>

        {/* Right Column (Visual Focus) */}
        <div className="relative h-full w-full flex justify-center lg:justify-end items-center py-12">
          {/* Mockup + Floating Dish Composite */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
             {/* Phone Mockup Placeholder */}
             <div className="absolute z-0 w-1/2 aspect-[9/19.5] bg-neutral-800 rounded-[3rem] border-8 border-neutral-900 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-[#D52A28]/10 animate-pulse flex items-center justify-center">
                   <span className="text-neutral-500 font-bold text-xs rotate-[-90deg]">App Layout</span>
                </div>
             </div>
             
             {/* Floating Dish Cut-out Placeholder */}
             <div className="relative z-10 w-4/5 aspect-square drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <ImagePlaceholder 
                  text="Beef Mechado: High-res Cut-out (No background)" 
                  className="w-full h-full rounded-full" 
                  aspectRatio="aspect-square"
                />
             </div>
          </div>
          
          {/* Subtle accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-primary/5 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};
