import React from 'react';
import { AppBadge } from '../components/AppBadge';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#B50418] pt-24 pb-12 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* CTA Block */}
      <div className="max-w-2xl flex flex-col gap-8 mb-24 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-display tracking-tight">
          Bring the taste of home to your kitchen.
        </h2>
        <div className="flex justify-center gap-4">
          <AppBadge type="appstore" className="bg-transparent border-white/20 hover:border-white h-12" />
          <AppBadge type="googleplay" className="bg-transparent border-white/20 hover:border-white h-12" />
        </div>
      </div>

      {/* Brand Graphic */}
      <div className="w-full select-none cursor-default opacity-10 pointer-events-none">
        <h2 className="text-[15vw] font-black text-white leading-none text-center tracking-tighter">
          TIMPLA
        </h2>
      </div>

      {/* Sub-footer */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 text-white/60 text-sm font-medium tracking-wide">
        <div className="flex gap-8 mb-6 md:mb-0 uppercase text-xs tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-80">
          <span>&copy; 2024 Timpla.ph</span>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
