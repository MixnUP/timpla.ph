import React from 'react';

const steps = [
  {
    number: "1",
    title: "Choose",
    desc: "Browse our selection of dishes and discover your new favorite recipe!"
  },
  {
    number: "2",
    title: "Wait & Track",
    desc: "Fresh and perfectly proportioned kits delivered to your doorstep. Track orders in real-time!"
  },
  {
    number: "3",
    title: "Cook & Serve",
    desc: "Follow our simple step-by-step guide. Your home-cooked meal is ready to share and savor."
  }
];

export const ProcessTrust: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full bg-white py-24 lg:py-32 border-b border-[#343132]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#343132] font-display">
            From craving to cooking in three simple steps.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:divide-x lg:divide-[#343132]/10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <span className="text-5xl font-extrabold text-[#D52A28] font-display mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-[#343132] mb-3">
                {step.title}
              </h3>
              <p className="text-[#343132]/80 font-medium text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
