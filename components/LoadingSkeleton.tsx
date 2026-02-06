
import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 p-12 md:p-16 space-y-12 relative overflow-hidden reveal">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      
      <div className="space-y-6 text-center">
        <div className="h-10 w-3/4 bg-white/5 rounded mx-auto animate-pulse"></div>
        <div className="h-4 w-32 bg-white/5 rounded mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="h-4 w-24 bg-white/5 rounded"></div>
          <div className="h-20 w-full bg-white/5 rounded animate-pulse"></div>
        </div>
        <div className="space-y-6">
          <div className="h-4 w-24 bg-white/5 rounded"></div>
          <div className="h-20 w-full bg-white/5 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-white/5 pt-10">
        <div className="w-8 h-8 border-2 border-white/5 border-t-[#d4a373] rounded-full animate-spin"></div>
        <p className="text-[8px] font-black uppercase tracking-[0.6em] text-gray-500">Deconstructing Institutional Variables</p>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
