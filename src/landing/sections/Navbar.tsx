import React from 'react';
import { Logo } from '../components/Logo';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-[#FFFBEB]/90 backdrop-blur-md border-b border-[#343132]/5 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Logo variant="secondary" className="h-8 w-auto" />
        
        <nav className="hidden md:flex gap-8 text-[#343132] font-medium text-sm tracking-wide">
          <a href="#signatures" className="hover:text-primary transition-colors">Signatures</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
        </nav>
        
        <button className="bg-[#D52A28] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#B50418] transition-colors">
          Get the App
        </button>
      </div>
    </header>
  );
};
