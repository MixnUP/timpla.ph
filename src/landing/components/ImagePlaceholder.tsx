import React from 'react';

interface ImagePlaceholderProps {
  text: string;
  className?: string;
  aspectRatio?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  text, 
  className = "", 
  aspectRatio = "aspect-video" 
}) => {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 animate-pulse flex items-center justify-center rounded-2xl ${aspectRatio} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 to-neutral-300/50" />
      <div className="relative z-10 text-center p-4">
        <p className="text-neutral-500 font-medium text-sm tracking-wider uppercase">
          {text}
        </p>
        <span className="text-neutral-400 text-xs mt-1 block italic opacity-60">
          Photo Placeholder
        </span>
      </div>
      
      {/* Tech grid overlay effect */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </div>
  );
};
