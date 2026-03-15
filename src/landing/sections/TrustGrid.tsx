import React from 'react';

const gridItems = [
  { label: 'Pre-Measured', sub: 'Zero Grocery Shopping' },
  { label: 'Chef-Crafted', sub: 'Restaurant Quality' },
  { label: '30 Mins', sub: 'Fast & Easy' },
  { label: 'Authentic', sub: 'Taste of Home' }
];

export const TrustGrid: React.FC = () => {
  return (
    <section className="bg-primary-dark overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {gridItems.map((item, index) => (
          <div 
            key={index} 
            className="relative p-8 md:p-12 border-b border-r border-white/10 group hover:bg-white/5 transition-colors"
          >
            {/* Crosshair accents */}
            <div className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center translate-x-1/2 -translate-y-1/2 opacity-20">
              <div className="w-px h-full bg-white" />
              <div className="h-px w-full bg-white absolute" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {item.label}
              </span>
              <span className="text-sm font-bold text-white/60 uppercase tracking-widest">
                {item.sub}
              </span>
            </div>
            
            {/* Tech line accent */}
            <div className="mt-8 h-px w-8 bg-white/20 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
