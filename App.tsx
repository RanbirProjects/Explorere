
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ReflectionForm } from './components/ReflectionForm';
import { InsightDisplay } from './components/InsightDisplay';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { generateInsight } from './services/gemini';
import { InsightResult, AppState } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('snapshot');
  const [state, setState] = useState<AppState>('idle');
  const [insight, setInsight] = useState<InsightResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTabChanging, setIsTabChanging] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsTabChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTabChanging(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  const handleReset = () => {
    setState('idle');
    setInsight(null);
    setError(null);
  };

  const handleSubmit = async (text: string) => {
    setState('loading');
    setError(null);
    try {
      const result = await generateInsight(text);
      setInsight(result);
      setState('success');
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'A neural processing discrepancy occurred during analysis.');
      setState('error');
    }
  };

  const renderContent = () => {
    const transitionClass = isTabChanging ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0';
    
    switch (activeTab) {
      case 'snapshot':
        return (
          <div className={`space-y-24 reveal ${transitionClass} transition-all duration-700`}>
            {state === 'idle' && (
              <section className="space-y-16">
                <div className="flex items-center gap-12 max-w-5xl mx-auto">
                  <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#d4a373] whitespace-nowrap">Input portal initialized</span>
                  <div className="h-px w-full bg-white/5"></div>
                </div>
                <ReflectionForm onSubmit={handleSubmit} isLoading={false} />
              </section>
            )}

            {state === 'loading' && (
              <div className="max-w-5xl mx-auto py-20">
                <LoadingSkeleton />
              </div>
            )}

            {state === 'success' && insight && (
              <div className="py-10">
                <InsightDisplay insight={insight} onReset={handleReset} />
              </div>
            )}

            {state === 'error' && (
              <div className="max-w-2xl mx-auto bg-[#01080a] border border-rose-500/20 p-24 text-center space-y-12 reveal shadow-2xl rounded-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div className="space-y-6">
                  <h3 className="serif text-4xl font-bold text-white uppercase tracking-tight">Diagnostic Interrupted</h3>
                  <p className="text-gray-500 text-lg italic serif leading-relaxed">{error}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-6 bg-rose-500/10 text-rose-500 text-[11px] font-black uppercase tracking-[0.6em] border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all"
                >
                  Clear Buffer & Retry
                </button>
              </div>
            )}
          </div>
        );
      case 'resources':
        return (
          <div className={`space-y-24 reveal ${transitionClass} transition-all duration-700 max-w-4xl mx-auto py-20`}>
            <h2 className="serif text-6xl text-white font-bold tracking-tight">Institutional <span className="text-[#d4a373]">Library.</span></h2>
            <p className="text-gray-400 italic serif text-2xl">High-stakes briefings for modern leadership.</p>
            <div className="grid grid-cols-1 gap-12 pt-12">
               {[1,2,3].map(i => (
                 <div key={i} className="p-10 border border-white/5 bg-white/5 rounded-sm hover:border-[#d4a373]/30 transition-all cursor-pointer">
                    <span className="text-[10px] font-black text-[#d4a373] tracking-[0.5em] uppercase block mb-4">Strategic Whitepaper</span>
                    <h3 className="serif text-3xl text-white font-bold mb-4 italic">The Architecture of Process Entropy v.0{i}</h3>
                    <p className="text-gray-500 text-lg italic serif">Analyzing the decay of institutional velocity in hybrid teams.</p>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'framework':
      case 'methodology':
        return (
          <div className={`space-y-24 reveal ${transitionClass} transition-all duration-700 max-w-4xl mx-auto py-20 text-center`}>
            <h2 className="serif text-6xl text-white font-bold tracking-tight italic">Engine Protocols.</h2>
            <div className="p-16 border border-white/10 bg-white/5 rounded-sm">
               <p className="text-gray-400 italic serif text-2xl leading-relaxed">
                 Our system utilizes <strong>Neural Inference</strong> to map social capital, institutional friction, and strategic velocity. 
                 Secure. Detached. Institutional-grade.
               </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={handleTabChange} onReset={handleReset}>
      {renderContent()}
    </Layout>
  );
}

export default App;
