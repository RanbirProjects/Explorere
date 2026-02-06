import React from 'react';

interface ReflectionFormProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const EXAMPLES = [
  { label: "Conflict", text: "A critical project stakeholder is consistently bypasssing our agreed-upon review cycles, leading to redundant work and team frustration." },
  { label: "Strategic Gap", text: "We are focused on feature velocity at the cost of architectural integrity. I need to influence leadership to pivot toward stability." },
  { label: "Leadership", text: "I'm struggling to delegate complex tasks because I fear the drop in quality will reflect poorly on my department's reputation." }
];

export const ReflectionForm: React.FC<ReflectionFormProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 10) return;
    onSubmit(text);
  };

  const isInvalid = text.trim().length < 10;

  return (
    <div className="w-full max-w-5xl mx-auto reveal stagger-1">
      <div className="bg-white/5 border border-white/10 shadow-2xl p-8 md:p-16 transition-all group hover:border-[#d4a373]/30">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
              <div className="space-y-4">
                <h3 className="serif text-4xl font-bold text-white">Diagnostic Entry</h3>
                <p className="text-lg text-gray-500 font-medium italic serif">Map your professional landscape with granular detail.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex.label}
                    type="button"
                    onClick={() => setText(ex.text)}
                    className="text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2.5 bg-white/5 text-gray-400 hover:bg-[#d4a373] hover:text-[#01080a] transition-all border border-white/5 hover:border-[#d4a373]"
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <textarea
                id="reflection"
                rows={7}
                className="w-full block p-0 text-3xl text-white border-0 focus:ring-0 placeholder:text-gray-700 bg-transparent resize-none leading-snug italic serif font-light"
                placeholder="Describe the institutional friction..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isLoading}
              />
              <div className="h-px w-full bg-white/5 group-focus-within:bg-[#d4a373] transition-all duration-700 mt-6 group-focus-within:shadow-[0_0_20px_rgba(212,163,115,0.4)]"></div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${text.length < 10 ? 'bg-gray-800' : 'bg-[#d4a373] shadow-[0_0_10px_rgba(212,163,115,0.6)]'}`}></div>
                <span>{text.length < 10 ? 'Drafting Diagnostic' : 'Diagnostic Initialized'}</span>
              </div>
              <span>{text.length} Signals Captured</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button
              type="submit"
              disabled={isLoading || isInvalid}
              className={`flex-1 py-6 px-12 font-black text-[11px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-5 group/btn overflow-hidden relative ${
                isLoading || isInvalid 
                  ? 'bg-white/5 text-gray-700 cursor-not-allowed border border-white/5' 
                  : 'bg-[#d4a373] text-[#01080a] hover:bg-white hover:scale-[1.02] active:scale-95 shadow-[0_20px_50px_rgba(212,163,115,0.2)]'
              }`}
            >
              <div className="relative z-10 flex items-center gap-5">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-[#01080a]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Extracting Logic...</span>
                  </>
                ) : (
                  <>
                    <span>Execute Session Analysis</span>
                    <svg className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setText('')}
              className="px-12 py-6 bg-transparent border border-white/10 text-gray-500 text-[11px] font-black uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all"
            >
              Wipe State
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};