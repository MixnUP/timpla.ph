import React from 'react';

interface AppBadgeProps {
  type: 'appstore' | 'googleplay';
  className?: string;
}

export const AppBadge: React.FC<AppBadgeProps> = ({ type, className = "" }) => {
  const isAppStore = type === 'appstore';
  
  return (
    <div className={`h-12 px-6 flex items-center justify-center bg-black text-white rounded-lg border border-white/10 hover:bg-neutral-900 transition-colors cursor-pointer group ${className}`}>
      <div className="flex items-center gap-3">
        {isAppStore ? (
          <img src="/images/apple-logo-white.svg" alt="App Store" className="w-6 h-6 object-contain" />
        ) : (
          <img src="/images/google-play-store-white.svg" alt="Google Play" className="w-6 h-6 object-contain" />
        )}
        <div className="flex flex-col leading-none">
          <span className="text-[10px] uppercase font-bold text-white/60">
            {isAppStore ? 'Download on the' : 'Get it on'}
          </span>
          <span className="text-lg font-bold">
            {isAppStore ? 'App Store' : 'Google Play'}
          </span>
        </div>
      </div>
    </div>
  );
};
