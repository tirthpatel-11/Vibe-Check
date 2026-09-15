import React from 'react';
import { TIME_SLOTS } from '../data/timetableData.js';

export default function BottomControls({
  selectedSlotIndex,
  onPrevSlot,
  onNextSlot,
  isLiveMode,
  onResetToNow,
}) {
  const isFirstSlot = selectedSlotIndex === 0;
  const isLastSlot = selectedSlotIndex === TIME_SLOTS.length - 1;

  return (
    <div className="w-full mt-5 mb-8">
      
      {/* Return to Now button if browsing another slot */}
      {!isLiveMode && (
        <div className="flex justify-center mb-3">
          <button
            onClick={onResetToNow}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 transition active:scale-95 cursor-pointer shadow-sm shadow-indigo-950"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Reset to Live Time</span>
          </button>
        </div>
      )}

      {/* Two Large Thumb-Friendly Buttons (matches user sketch: "next and previous btn" at bottom) */}
      <div className="grid grid-cols-2 gap-3">
        
        {/* Previous Slot Button */}
        <button
          onClick={onPrevSlot}
          disabled={isFirstSlot}
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] disabled:opacity-25 disabled:hover:bg-slate-900 disabled:active:scale-100 transition shadow-lg shadow-black/20 cursor-pointer disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous Slot</span>
        </button>

        {/* Next Slot Button */}
        <button
          onClick={onNextSlot}
          disabled={isLastSlot}
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] disabled:opacity-25 disabled:hover:bg-slate-900 disabled:active:scale-100 transition shadow-lg shadow-black/20 cursor-pointer disabled:cursor-not-allowed"
        >
          <span>Next Slot</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}
