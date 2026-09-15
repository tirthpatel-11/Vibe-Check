import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import SlotHeader from './components/SlotHeader.jsx';
import AvailableRoomsBox from './components/AvailableRoomsBox.jsx';
import BottomControls from './components/BottomControls.jsx';
import MenuDrawer from './components/MenuDrawer.jsx';
import RoomScheduleModal from './components/RoomScheduleModal.jsx';
import { getRoomOccupancy, TIME_SLOTS } from './data/timetableData.js';
import { getTimeContext } from './utils/timeUtils.js';

export default function App() {
  const [timeContext, setTimeContext] = useState(() => getTimeContext(new Date()));
  const [selectedDayKey, setSelectedDayKey] = useState(() => timeContext.currentDayKey);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(() => timeContext.currentSlotIndex);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalRoom, setModalRoom] = useState(null);

  // Live timer tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedContext = getTimeContext(new Date());
      setTimeContext(updatedContext);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Is current view the real-time active slot?
  const isLiveSlot = 
    !timeContext.isWeekend &&
    selectedDayKey === timeContext.currentDayKey &&
    selectedSlotIndex === timeContext.currentSlotIndex &&
    timeContext.isActiveCollegeHours;

  // Jump back to live slot
  const handleResetToNow = () => {
    const nowCtx = getTimeContext(new Date());
    setSelectedDayKey(nowCtx.currentDayKey);
    setSelectedSlotIndex(nowCtx.currentSlotIndex);
  };

  // Slot step handlers
  const handlePrevSlot = () => {
    setSelectedSlotIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlot = () => {
    setSelectedSlotIndex((prev) => Math.min(TIME_SLOTS.length - 1, prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalRoom || isMenuOpen) return;
      if (e.key === 'ArrowLeft') handlePrevSlot();
      if (e.key === 'ArrowRight') handleNextSlot();
      if (e.key.toLowerCase() === 'm') setIsMenuOpen(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalRoom, isMenuOpen]);

  // Compute room statuses for selected day and slot
  const currentRooms = getRoomOccupancy(selectedDayKey, selectedSlotIndex);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* 1. Top Navbar (Menu button on left as in user's paint sketch) */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        isLiveMode={isLiveSlot}
        onResetToNow={handleResetToNow}
      />

      {/* 2. Main Content Container (Focused mobile/minimal layout) */}
      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-3 flex flex-col justify-start">
        
        {/* Top Slot Header: [ < ]  [ Date, Day, Time ]  [ > ] */}
        <SlotHeader
          selectedDayKey={selectedDayKey}
          selectedSlotIndex={selectedSlotIndex}
          onPrevSlot={handlePrevSlot}
          onNextSlot={handleNextSlot}
          isLiveSlot={isLiveSlot}
          timeContext={timeContext}
        />

        {/* Central Card: "name of available Labs and classroom" */}
        <AvailableRoomsBox
          rooms={currentRooms}
          selectedDayKey={selectedDayKey}
          selectedSlotIndex={selectedSlotIndex}
          onViewSchedule={(room) => setModalRoom(room)}
        />

        {/* Bottom Controls: [ Previous Slot ]  [ Next Slot ] */}
        <BottomControls
          selectedSlotIndex={selectedSlotIndex}
          onPrevSlot={handlePrevSlot}
          onNextSlot={handleNextSlot}
          isLiveMode={isLiveSlot}
          onResetToNow={handleResetToNow}
        />

      </main>

      {/* Menu Drawer: Weekday Selector & Time Slot Selector */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedDayKey={selectedDayKey}
        selectedSlotIndex={selectedSlotIndex}
        onSelectDayKey={setSelectedDayKey}
        onSelectSlotIndex={setSelectedSlotIndex}
        onResetToNow={handleResetToNow}
        onOpenRoomSchedule={(room) => setModalRoom(room)}
      />

      {/* Room Weekly Schedule Modal */}
      <RoomScheduleModal
        room={modalRoom}
        onClose={() => setModalRoom(null)}
      />

    </div>
  );
}
