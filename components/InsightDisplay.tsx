
import React from 'react';
import { InsightResult } from '../types';

interface InsightDisplayProps {
  insight: InsightResult;
  onReset: () => void;
}

export const InsightDisplay: React.FC<InsightDisplayProps> = ({ insight, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 reveal">
      <div className="bg-[#01080a] border border-white/10 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)] rounded-sm overflow-hidden relative">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4a373]/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>

        {/* Top Control Bar */}
        <div className="bg-[#d4a373] py-2.5 px-8 flex justify-between items-center text-[#01080a]">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Diagnostic v4.2.1</span>
            <div className="h-3 w-px bg-[#01080a]/20"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Neural Link: Stable</span>
          </div>
          <div className="flex gap-2 items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#01080a] animate-ping"></div>
             <span className="text-[9px] font-black uppercase tracking-[0.5em]">Live Data Analysis</span>
          </div>
        </div>

        <div className="p-10 md:p-14 space-y-14 relative z-10">
          {/* Executive Summary Section */}
          <div className="text-center space-y-8 border-b border-white/5 pb-14">
            <div className="inline-block px-5 py-1.5 bg-white/5 border border-[#d4a373]/20 text-[#d4a373] text-[9px] font-black uppercase tracking-[0.7em] rounded-full mb-4">
              Core Strategic Signal
            </div>
            <h2 className="serif text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight italic">
              "{insight.summary}"
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Left: Logic Mapping */}
            <div className="space-y-10">
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d4a373] rounded-full"></div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Themes extracted</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {insight.themes.map((theme, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300 rounded-sm hover:border-[#d4a373]/40 transition-all cursor-default uppercase tracking-widest">
                      {theme}
                    </span>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d4a373] rounded-full"></div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Energetic State</h3>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-sm group">
                  <p className="text-2xl md:text-3xl serif italic font-bold text-white group-hover:text-[#d4a373] transition-colors">{insight.signal}</p>
                  <div className="mt-6 space-y-2">
                    <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                       <div className="h-full bg-[#d4a373] progress-fill shadow-[0_0_15px_rgba(212,163,115,0.6)]"></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-600">
                      <span>Inference Fidelity</span>
                      <span className="text-[#d4a373]">98.7% Confident</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right: Intervention logic */}
            <div className="space-y-10">
              <section className="space-y-8">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-[#d4a373] rounded-full"></div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Strategic Inquiries</h3>
                </div>
                <div className="space-y-8">
                  {insight.prompts.map((prompt, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="serif text-4xl text-white/5 font-black italic transition-all group-hover:text-[#d4a373]/20">0{i+1}</span>
                      <p className="text-[13px] md:text-[14px] text-gray-400 leading-relaxed font-medium pt-1 italic serif group-hover:text-gray-200 transition-colors">
                        {prompt}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {insight.risk && (
                <section className="bg-rose-500/5 p-8 border border-rose-500/20 rounded-sm hover:bg-rose-500/10 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
                    <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-rose-500">Vulnerability Note</h3>
                  </div>
                  <p className="text-gray-200 font-serif italic text-[15px] leading-snug">
                    {insight.risk}
                  </p>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* High-Fidelity Action Trigger */}
      <div className="flex justify-center pt-12">
        <button
          onClick={onReset}
          className="group flex flex-col items-center gap-6"
        >
          <div className="w-px h-12 bg-white/10 group-hover:bg-[#d4a373] group-hover:h-20 transition-all duration-700"></div>
          <span className="text-[10px] font-black uppercase tracking-[1em] text-gray-600 group-hover:text-white transition-all">New Diagnostic Session</span>
        </button>
      </div>
    </div>
  );
};
