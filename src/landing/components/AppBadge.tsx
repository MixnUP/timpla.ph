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
        {/* Placeholder Icon */}
        <div className="w-6 h-6 bg-white/20 rounded-sm animate-pulse" />
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
