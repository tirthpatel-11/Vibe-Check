import React, { useEffect } from 'react';
import { DAYS, TIME_SLOTS, ALL_ROOMS } from '../data/timetableData.js';

export default function MenuDrawer({
  isOpen,
  onClose,
  selectedDayKey,
  selectedSlotIndex,
  onSelectDayKey,
  onSelectSlotIndex,
  onResetToNow,
  onOpenRoomSchedule,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-sm bg-slate-950 text-white shadow-2xl flex flex-col border-r border-slate-800 transition-all">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Menu & Selectors
              </h2>
              <p className="text-xs text-slate-400">
                Pick any day or time slot
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
            
            {/* Quick Reset to Now */}
            <button
              onClick={() => {
                onResetToNow();
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 font-semibold text-xs transition cursor-pointer"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Jump to Current Live Time</span>
            </button>

            {/* 1. Weekday Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Select Weekday
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {DAYS.map((day) => {
                  const isSelected = day.key === selectedDayKey;
                  return (
                    <button
                      key={day.key}
                      onClick={() => onSelectDayKey(day.key)}
                      className={`flex flex-col items-center justify-center py-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30 font-bold scale-[1.02]'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                      }`}
                    >
                      <span>{day.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Time Slot Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Select Time Slot (1 Hour)
              </label>
              <div className="space-y-1.5">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = slot.id === selectedSlotIndex;
                  return (
                    <button
                      key={slot.id}
                      onClick={() => {
                        onSelectSlotIndex(slot.id);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs transition cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-500 font-bold shadow-md shadow-indigo-600/30'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {slot.slotNum}
                        </span>
                        <span className="font-semibold">{slot.label}</span>
                      </div>
                      
                      {isSelected && (
                        <span className="text-[11px] text-indigo-200">Active</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Room Explorer */}
            <div className="pt-3 border-t border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Room Weekly Timetable
              </label>
              <p className="text-[11px] text-slate-500 mb-2.5">
                Inspect 5-day schedule for any room:
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {ALL_ROOMS.map(room => (
                  <button
                    key={room.id}
                    onClick={() => {
                      onOpenRoomSchedule(room);
                      onClose();
                    }}
                    className="p-2 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 hover:text-emerald-400 text-slate-300 border border-slate-800 transition text-center cursor-pointer truncate"
                  >
                    {room.code}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition cursor-pointer"
            >
              Done
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
