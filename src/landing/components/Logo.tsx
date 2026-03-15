import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'secondary' | 'app';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'primary', className = "" }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      {/* Pot Icon (Placeholder) */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary rounded-full group-hover:scale-110 transition-transform" />
        <div className="relative z-10 w-4 h-4 border-2 border-white rounded-t-full border-b-0" />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black font-nunito tracking-tight text-text-dark">
          TIMPLA
        </span>
        {variant === 'primary' && (
          <span className="text-[8px] font-medium text-primary uppercase tracking-[0.2em] -mt-1">
            mura • masarap • madali
          </span>
        )}
      </div>
    </div>
  );
};
