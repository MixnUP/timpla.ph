import React from 'react';

const stats = [
  { value: "100%", label: "Authentic" },
  { value: "30m", label: "To Cook" },
  { value: "Chef", label: "Crafted" },
  { value: "No", label: "Grocery" }
];

export const ProcessTrust: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFBEB] py-24 lg:py-32 border-b border-[#343132]/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:divide-x lg:divide-[#343132]/10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <span className="text-4xl lg:text-5xl font-extrabold text-[#D52A28] font-display mb-4 tracking-tighter">
              {stat.value}
            </span>
            <span className="text-[#343132] font-semibold text-sm tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
