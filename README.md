# IIIT Surat — Room & Lab Vacancy Tracker

A minimalist, dark-themed **React + Vite** web application that provides real-time vacancy tracking for classrooms and laboratories at **IIIT Surat**, parsed accurately from the official 14-page academic timetables.

---

## 🏛️ Facilities Configured

- **6 Common Classrooms**: `CR 1`, `CR 2`, `CR 3`, `CR 4`, `CR 5`, `CR 6`
- **3 Computer Science Labs**: `CSE LAB 1`, `CSE LAB 2`, `CSE LAB 3`
- **3 ECE Labs**: `ECE LAB 1` *(Physics Lab)*, `ECE LAB 2`, `ECE LAB 3`

---

## 📁 Clean Project Structure

```
room/
├── index.html                     # Entry HTML (dark theme configured)
├── package.json                   # Project dependencies & scripts
├── vite.config.js                 # Vite bundler configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── src/
    ├── main.jsx                   # React root entry
    ├── App.jsx                    # Core application layout
    ├── index.css                  # Global Tailwind stylesheet
    ├── data/
    │   └── timetableData.js       # Complete parsed schedule for CR 1-6 & Labs 1-3
    ├── utils/
    │   └── timeUtils.js           # Time slot matching, countdowns & streaks
    └── components/
        ├── Navbar.jsx             # Minimal top bar with menu trigger & live clock
        ├── SlotHeader.jsx         # Stepper: [ < ] [ Day, Date, Time ] [ > ]
        ├── AvailableRoomsBox.jsx  # Central card: Available Classrooms, CSE & ECE Labs
        ├── BottomControls.jsx     # Bottom thumb-friendly: [ Prev Slot ] [ Next Slot ]
        ├── MenuDrawer.jsx         # Slide-out weekday & time slot selectors
        └── RoomScheduleModal.jsx  # Interactive 5-day timetable matrix for any room
```

---

## 🚀 How to Run

1. Open your terminal in this directory (`d:\Study\Coding\Vibe-Coding\room`).
2. Start the development server:
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`.

3. To build for production:
   ```bash
   npm run build
   ```
