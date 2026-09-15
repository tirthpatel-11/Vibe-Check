import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenMenu, isLiveMode, onResetToNow }) {
  const [liveTime, setLiveTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Menu Button (Matches user sketch: "menu btn + navbar") */}
        <button
          onClick={onOpenMenu}
          className="p-2 -ml-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-95 cursor-pointer flex items-center gap-2"
          aria-label="Open weekday and slot menu"
        >
          <svg className="w-6 h-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Menu</span>
        </button>

        {/* Center: Title */}
        <div className="text-center">
          <h1 className="text-sm font-bold text-white tracking-tight">
            IIIT Surat
          </h1>
          <p className="text-[11px] text-slate-400 font-medium">
            Room Vacancy
          </p>
        </div>

        {/* Right: Live Clock or Back to Now */}
        <div className="flex items-center">
          {!isLiveMode ? (
            <button
              onClick={onResetToNow}
              className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition cursor-pointer"
            >
              Back to Now
            </button>
          ) : (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{liveTime}</span>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
