import React, { useEffect } from 'react';
import { DAYS, TIME_SLOTS, getRoomWeeklySchedule } from '../data/timetableData.js';

export default function RoomScheduleModal({ room, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!room) return null;

  const weeklySchedule = getRoomWeeklySchedule(room.id);
  
  let totalSlots = 0;
  let totalFree = 0;
  DAYS.forEach(day => {
    (weeklySchedule[day.key] || []).forEach(slotItem => {
      totalSlots++;
      if (slotItem.isFree) totalFree++;
    });
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-3xl bg-slate-950 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden transition-all">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xl font-extrabold text-white">
                  {room.code}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {room.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Weekly Timetable (Monday – Friday) • <strong className="text-emerald-400">{totalFree}</strong> of {totalSlots} slots free ({Math.round((totalFree/totalSlots)*100)}%)
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body: Matrix */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-2.5 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-20">
                    Day
                  </th>
                  {TIME_SLOTS.map(slot => (
                    <th key={slot.id} className="py-2 px-1 text-[11px] font-bold text-slate-400 text-center">
                      <div>S{slot.slotNum}</div>
                      <div className="text-[10px] text-slate-500">{slot.startHour}:00</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {DAYS.map(day => {
                  const daySlots = weeklySchedule[day.key] || [];
                  return (
                    <tr key={day.key} className="hover:bg-slate-900/40 transition">
                      <td className="py-2.5 px-3 text-xs font-bold text-slate-300">
                        {day.shortLabel}
                      </td>
                      {daySlots.map(slotItem => {
                        const { slot, isFree, occupancy } = slotItem;
                        return (
                          <td key={slot.id} className="p-1 align-top">
                            {isFree ? (
                              <div className="h-12 rounded-xl flex items-center justify-center bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 text-[10px] font-bold">
                                Free
                              </div>
                            ) : (
                              <div 
                                className="h-12 rounded-xl p-1 flex flex-col justify-center bg-rose-950/30 border border-rose-900/50 text-rose-300 text-center"
                                title={`${occupancy.course} - ${occupancy.batch}`}
                              >
                                <span className="text-[10px] font-bold truncate">
                                  {occupancy.course}
                                </span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-slate-900/60 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
