import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Story: React.FC = () => {
  return (
    <section className="bg-bg-light py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl text-text-dark font-black mb-8 leading-tight">
            Pinas sa <br />
            <span className="text-primary">bawat kagat.</span>
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 font-medium max-w-lg">
            <p>
              Timpla was born from a simple mission: to help overseas Filipinos reconnect with their heritage 
              through the flavors of home. 
            </p>
            <p>
              We believe that authentic food shouldn't be a luxury of time. By combining traditional recipes with 
              modern tech, we make it easy for anyone to cook restaurant-quality Filipino meals in 30 minutes.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
               <div className="w-6 h-[2px] bg-primary" />
            </div>
            <span className="font-bold text-text-dark uppercase tracking-widest text-sm">Our Mission</span>
          </div>
        </div>

        <div className="relative">
          <ImagePlaceholder text="Founders / Kitchen Photo" className="rounded-[3rem] shadow-2xl" aspectRatio="aspect-[4/5]" />
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
