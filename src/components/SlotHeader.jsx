import React from 'react';
import { TIME_SLOTS, DAYS } from '../data/timetableData.js';
import { formatTimeRemaining } from '../utils/timeUtils.js';

export default function SlotHeader({
  selectedDayKey,
  selectedSlotIndex,
  onPrevSlot,
  onNextSlot,
  isLiveSlot,
  timeContext,
}) {
  const activeSlot = TIME_SLOTS[selectedSlotIndex] || TIME_SLOTS[0];
  const activeDay = DAYS.find(d => d.key === selectedDayKey) || DAYS[0];

  return (
    <div className="w-full my-4">
      <div className="flex items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 shadow-lg shadow-black/20">
        
        {/* Previous Slot Button (matches user sketch: left box "[ < ]") */}
        <button
          onClick={onPrevSlot}
          disabled={selectedSlotIndex === 0}
          className="w-12 h-14 rounded-xl flex items-center justify-center bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 disabled:opacity-20 disabled:hover:bg-slate-800/80 transition active:scale-95 cursor-pointer disabled:cursor-not-allowed border border-slate-700/50"
          title="Previous Slot"
          aria-label="Previous Slot"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Center: Date, Day, Time (matches user sketch: "date, day, time next and previous slot btns") */}
        <div className="flex-1 text-center px-1">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
            <span className="font-bold text-slate-300">{activeDay.label}</span>
            <span>•</span>
            <span>Slot {activeSlot.slotNum}/9</span>
          </div>

          <div className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-0.5">
            {activeSlot.label}
          </div>

          {/* Subtext: Live Status or countdown */}
          <div className="mt-1 flex items-center justify-center gap-1 text-[11px]">
            {isLiveSlot ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Current Slot</span>
                {timeContext.secondsLeftInSlot > 0 && (
                  <span className="text-slate-400 font-mono">
                    ({formatTimeRemaining(timeContext.secondsLeftInSlot)} left)
                  </span>
                )}
              </span>
            ) : (
              <span className="text-slate-500">
                Previewing
              </span>
            )}
          </div>
        </div>

        {/* Next Slot Button (matches user sketch: right box "[ > ]") */}
        <button
          onClick={onNextSlot}
          disabled={selectedSlotIndex === TIME_SLOTS.length - 1}
          className="w-12 h-14 rounded-xl flex items-center justify-center bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 disabled:opacity-20 disabled:hover:bg-slate-800/80 transition active:scale-95 cursor-pointer disabled:cursor-not-allowed border border-slate-700/50"
          title="Next Slot"
          aria-label="Next Slot"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}
