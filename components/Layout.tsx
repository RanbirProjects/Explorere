
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onReset?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, onReset }) => {
  const handleLogoClick = () => {
    onTabChange('snapshot');
    if (onReset) onReset();
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* High-Octane Navigation */}
      <nav className="glass-nav py-5 px-6 md:px-10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-5 group text-left outline-none"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 bg-[#d4a373] flex items-center justify-center rounded-sm shadow-[0_0_40px_rgba(212,163,115,0.25)] group-hover:rotate-12 transition-all duration-700 ease-out">
              <span className="text-[#01080a] font-black text-sm tracking-tighter">IS</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="serif text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#d4a373] transition-colors duration-500">Insight Snapshot</span>
              <span className="text-[7px] font-black uppercase tracking-[0.6em] text-[#d4a373] opacity-80">Elite Intelligence Engine</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-12 relative">
            {[
              { id: 'snapshot', label: 'Analysis' },
              { id: 'resources', label: 'Library' },
              { id: 'framework', label: 'Method' },
              { id: 'methodology', label: 'Logic' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`transition-all pb-1 border-b-2 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] ${
                  activeTab === item.id 
                    ? 'text-white border-[#d4a373]' 
                    : 'text-gray-500 border-transparent hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:block">
            <button className="glowing-button flex items-center gap-4 px-8 py-3.5 border border-[#d4a373]/20 bg-white/5 text-white text-[9px] font-black uppercase tracking-widest rounded-sm hover:bg-[#d4a373] hover:text-[#01080a] transition-all duration-500 shadow-2xl">
              <span>Secure Access</span>
              <div className="w-1.5 h-1.5 bg-[#d4a373] rounded-full group-hover:bg-[#01080a] animate-pulse"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <header className="py-24 md:py-40 px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="max-w-5xl mx-auto reveal">
            <div className="inline-flex items-center gap-6 mb-12 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.7em] text-[#d4a373]">Institutional Intelligence</span>
            </div>
            
            <div className="space-y-12">
              {activeTab === 'snapshot' && (
                <>
                  <h1 className="serif text-6xl md:text-[8rem] font-normal leading-none tracking-tighter text-white">
                    Strategic <br/><span className="italic text-[#d4a373]">Clarity.</span>
                  </h1>
                  <p className="text-gray-400 text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed serif italic">
                    Extracting high-velocity insights from complex institutional friction.
                  </p>
                </>
              )}
              {/* Other tabs have similar high-end hero styling handled via the same pattern */}
              {activeTab !== 'snapshot' && (
                 <>
                  <h1 className="serif text-6xl md:text-[8rem] font-normal leading-none tracking-tighter text-white">
                    Institutional <br/><span className="italic text-[#d4a373]">{activeTab.toUpperCase()}.</span>
                  </h1>
                  <p className="text-gray-400 text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed serif italic">
                    Deep-tier documentation and architectural protocols.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Light Streaks */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
          <div className="absolute -top-1/2 left-1/4 w-[1000px] h-[1000px] bg-[#d4a373] rounded-full filter blur-[200px] opacity-10 animate-pulse"></div>
          <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#003b44] rounded-full filter blur-[180px] opacity-20"></div>
        </div>
      </header>
      
      <main className="flex-grow w-full max-w-7xl mx-auto py-12 px-6 md:px-10 relative z-10">
        {children}
      </main>

      <footer className="bg-white/5 border-t border-white/5 py-24 px-6 md:px-10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center space-x-4">
              <div className="w-9 h-9 bg-[#d4a373] flex items-center justify-center rounded-sm">
                <span className="text-[#01080a] font-black text-[10px]">IS</span>
              </div>
              <span className="serif text-2xl font-bold text-white">Insight Snapshot</span>
            </div>
            <p className="text-xl text-gray-500 leading-relaxed max-w-md italic serif font-medium">
              "Precision is the ultimate differentiator in environments of high professional complexity."
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4a373]">Navigation</h4>
            <ul className="text-[11px] font-bold text-gray-500 space-y-5 uppercase tracking-widest">
              <li><button onClick={() => onTabChange('snapshot')} className="hover:text-white transition-colors">Dashboard</button></li>
              <li><button onClick={() => onTabChange('resources')} className="hover:text-white transition-colors">Strategic Library</button></li>
              <li><button onClick={() => onTabChange('framework')} className="hover:text-white transition-colors">Methodology</button></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4a373]">Legal</h4>
            <ul className="text-[11px] font-bold text-gray-500 space-y-5 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.6em]">
            &copy; {new Date().getFullYear()} INSIGHT SNAPSHOT // ELITE INSTITUTIONAL ADVISORY
          </p>
          <span className="text-[9px] font-black text-[#d4a373] uppercase tracking-[0.4em] bg-white/5 px-6 py-3 border border-white/10 rounded-full">
            Institutional Grade Analysis
          </span>
        </div>
      </footer>
    </div>
  );
};
