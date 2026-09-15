import { TIME_SLOTS, DAYS, SCHEDULE, ALL_ROOMS } from '../data/timetableData.js';

/**
 * Get the current day key ('Mo', 'Tu', 'We', 'Th', 'Fr') or null if weekend
 */
export function getCurrentDayKey() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  switch (day) {
    case 1: return 'Mo';
    case 2: return 'Tu';
    case 3: return 'We';
    case 4: return 'Th';
    case 5: return 'Fr';
    default: return null; // Weekend
  }
}

/**
 * Given a date, get the slot index (0-8) or -1 if outside college hours
 */
export function getCurrentSlotIndex(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // College runs 09:00 (540 min) to 18:00 (1080 min)
  for (let i = 0; i < TIME_SLOTS.length; i++) {
    const slot = TIME_SLOTS[i];
    const slotStart = slot.startHour * 60 + slot.startMin;
    const slotEnd = slot.endHour * 60 + slot.endMin;
    if (totalMinutes >= slotStart && totalMinutes < slotEnd) {
      return i;
    }
  }

  return -1;
}

/**
 * Returns detailed status about current time relative to college hours
 */
export function getTimeContext(date = new Date()) {
  const day = date.getDay(); // 0 = Sun, 6 = Sat
  const isWeekend = day === 0 || day === 6;
  const currentDayKey = getCurrentDayKey();
  const currentSlotIndex = getCurrentSlotIndex(date);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  const isBeforeHours = totalMinutes < 9 * 60;
  const isAfterHours = totalMinutes >= 18 * 60;

  let secondsLeftInSlot = 0;
  if (currentSlotIndex !== -1 && !isWeekend) {
    const activeSlot = TIME_SLOTS[currentSlotIndex];
    const slotEndMinutes = activeSlot.endHour * 60 + activeSlot.endMin;
    const remainingMinutes = slotEndMinutes - totalMinutes - 1;
    const remainingSeconds = 60 - date.getSeconds();
    secondsLeftInSlot = Math.max(0, remainingMinutes * 60 + remainingSeconds);
  }

  return {
    isWeekend,
    isBeforeHours,
    isAfterHours,
    isActiveCollegeHours: !isWeekend && currentSlotIndex !== -1,
    currentDayKey: currentDayKey || 'Mo', // fallback to Monday if weekend
    currentSlotIndex: currentSlotIndex !== -1 ? currentSlotIndex : (isAfterHours ? 8 : 0),
    secondsLeftInSlot,
  };
}

/**
 * Calculates for a specific room and slot:
 * - If currently FREE: how many consecutive future slots it remains free today
 * - If currently OCCUPIED: which future slot it will become free today
 */
export function getRoomAvailabilityStreak(roomId, dayKey, slotIndex) {
  const daySchedule = SCHEDULE[dayKey] || {};
  const currentOccupied = !!daySchedule[slotIndex]?.[roomId];

  if (!currentOccupied) {
    // Room is free! Count consecutive free slots from here onwards
    let consecutiveFree = 1;
    for (let i = slotIndex + 1; i < TIME_SLOTS.length; i++) {
      if (!daySchedule[i]?.[roomId]) {
        consecutiveFree++;
      } else {
        const nextOccupiedSlot = TIME_SLOTS[i];
        return {
          status: 'free',
          message: consecutiveFree === 1 
            ? `Free for this slot (occupied at ${nextOccupiedSlot.startHour.toString().padStart(2, '0')}:00)`
            : `Free for next ${consecutiveFree} hours (until ${nextOccupiedSlot.startHour.toString().padStart(2, '0')}:00)`,
          freeForHours: consecutiveFree,
          occupiedAt: nextOccupiedSlot.label,
        };
      }
    }
    return {
      status: 'free',
      message: `Free for rest of the day!`,
      freeForHours: consecutiveFree,
      occupiedAt: null,
    };
  } else {
    // Room is occupied! Find next slot when it becomes free
    for (let i = slotIndex + 1; i < TIME_SLOTS.length; i++) {
      if (!daySchedule[i]?.[roomId]) {
        const freeSlot = TIME_SLOTS[i];
        return {
          status: 'occupied',
          message: `Becomes free at ${freeSlot.startHour.toString().padStart(2, '0')}:00 (${freeSlot.label.split('-')[0].trim()})`,
          freeAtSlot: freeSlot.label,
        };
      }
    }
    return {
      status: 'occupied',
      message: 'Occupied for remaining slots today',
      freeAtSlot: null,
    };
  }
}

/**
 * Formats seconds into MM:SS or Xh Ym
 */
export function formatTimeRemaining(totalSeconds) {
  if (totalSeconds <= 0) return '00:00';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
}
