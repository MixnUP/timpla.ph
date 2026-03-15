import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'secondary' | 'app';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'primary', className = "" }) => {
  const getLogoSrc = () => {
    switch (variant) {
      case 'app':
        return '/brand/AppLogoNoText.png';
      case 'secondary':
        return '/brand/Secondary.png';
      default:
        return '/brand/Primary-Local.png';
    }
  };

  if (variant === 'primary') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/brand/Primary-Local.png" 
          alt="Timpla Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <img 
          src="/brand/Secondary_Standalone.png" 
          alt="Timpla Logo" 
          className="h-8 w-auto object-contain"
        />
        <span className="text-2xl font-black font-nunito tracking-tight text-primary translate-y-[5px]">
          TIMPLA
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      {/* Icon version for App or small placements */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <img 
          src="/brand/AppLogoNoText.png" 
          alt="Timpla Icon" 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform"
        />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black font-nunito tracking-tight text-text-dark">
          TIMPLA
        </span>
      </div>
    </div>
  );
};
