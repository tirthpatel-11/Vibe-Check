import React, { useState } from 'react';
import { getRoomAvailabilityStreak } from '../utils/timeUtils.js';

export default function AvailableRoomsBox({
  rooms,
  selectedDayKey,
  selectedSlotIndex,
  onViewSchedule,
}) {
  const [showOccupied, setShowOccupied] = useState(false);

  const availableRooms = rooms.filter(r => r.isFree);
  const occupiedRooms = rooms.filter(r => !r.isFree);

  const freeClassrooms = availableRooms.filter(r => r.category === 'Classrooms');
  const freeCseLabs = availableRooms.filter(r => r.category === 'CSE Labs');
  const freeEceLabs = availableRooms.filter(r => r.category === 'ECE Labs');

  const occupiedClassrooms = occupiedRooms.filter(r => r.category === 'Classrooms');
  const occupiedCseLabs = occupiedRooms.filter(r => r.category === 'CSE Labs');
  const occupiedEceLabs = occupiedRooms.filter(r => r.category === 'ECE Labs');

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl shadow-black/30">
      
      {/* Box Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>Available Rooms & Labs</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Facilities currently vacant & ready to use
          </p>
        </div>

        {/* Free Count Pill */}
        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{availableRooms.length} / {rooms.length} Free</span>
        </div>
      </div>

      {/* Main Content: The Available Groups */}
      <div className="mt-5 space-y-6">

        {/* 1. 🏛️ Available Classrooms */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span>🏛️</span>
              <span>Classrooms</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold lowercase">
              {freeClassrooms.length} of 6 free
            </span>
          </div>

          {freeClassrooms.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {freeClassrooms.map(room => {
                const streak = getRoomAvailabilityStreak(room.id, selectedDayKey, selectedSlotIndex);
                return (
                  <button
                    key={room.id}
                    onClick={() => onViewSchedule(room)}
                    className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-500/60 text-left transition group active:scale-[0.98] cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-white tracking-wide group-hover:text-emerald-300 transition">
                        {room.code}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1">
                      {streak.message}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-center text-xs text-slate-500">
              No classrooms available in this slot
            </div>
          )}
        </div>

        {/* 2. 💻 Available CSE Labs */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span>💻</span>
              <span>CSE Labs</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold lowercase">
              {freeCseLabs.length} of 3 free
            </span>
          </div>

          {freeCseLabs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {freeCseLabs.map(room => {
                const streak = getRoomAvailabilityStreak(room.id, selectedDayKey, selectedSlotIndex);
                return (
                  <button
                    key={room.id}
                    onClick={() => onViewSchedule(room)}
                    className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-500/60 text-left transition group active:scale-[0.98] cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-white tracking-wide group-hover:text-emerald-300 transition">
                        {room.code}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1">
                      {streak.message}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-center text-xs text-slate-500">
              All 3 CSE labs are currently in session
            </div>
          )}
        </div>

        {/* 3. ⚡ Available ECE Labs */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span>⚡</span>
              <span>ECE Labs</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold lowercase">
              {freeEceLabs.length} of 3 free
            </span>
          </div>

          {freeEceLabs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {freeEceLabs.map(room => {
                const streak = getRoomAvailabilityStreak(room.id, selectedDayKey, selectedSlotIndex);
                return (
                  <button
                    key={room.id}
                    onClick={() => onViewSchedule(room)}
                    className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-500/60 text-left transition group active:scale-[0.98] cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-white tracking-wide group-hover:text-emerald-300 transition">
                        {room.code}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1">
                      {streak.message}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800 text-center text-xs text-slate-500">
              All 3 ECE labs are currently in session
            </div>
          )}
        </div>

      </div>

      {/* Subtle Bottom Section: View Occupied Rooms Toggle */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <button
          onClick={() => setShowOccupied(!showOccupied)}
          className="w-full flex items-center justify-between text-xs font-medium text-slate-400 hover:text-slate-200 transition py-1 cursor-pointer"
        >
          <span>
            {showOccupied ? 'Hide Occupied Facilities' : `View Occupied Facilities (${occupiedRooms.length})`}
          </span>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${showOccupied ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showOccupied && (
          <div className="mt-3 space-y-2 pt-2 border-t border-slate-800/50">
            {occupiedRooms.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-2">No facilities occupied in this slot.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {occupiedRooms.map(room => (
                  <div
                    key={room.id}
                    onClick={() => onViewSchedule(room)}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-rose-950/40 flex items-center justify-between text-xs cursor-pointer hover:border-slate-700 transition"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">{room.code}</span>
                        <span className="text-[10px] text-rose-400 font-medium">{room.occupancy?.course}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 truncate max-w-[180px]">
                        {room.occupancy?.batch} ({room.occupancy?.faculty || 'Faculty'})
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Schedule &rarr;
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
