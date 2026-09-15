// Timetable data compiled from IIIT Surat Semester 1, 3, 5, 7, and M.Tech schedules
// Exactly 6 Classrooms + 6 Labs (3 CSE Labs, 3 ECE Labs where ECE Lab 1 = Physics Lab)

export const TIME_SLOTS = [
  { id: 0, label: '09:00 - 10:00 AM', startHour: 9, startMin: 0, endHour: 10, endMin: 0, slotNum: 1 },
  { id: 1, label: '10:00 - 11:00 AM', startHour: 10, startMin: 0, endHour: 11, endMin: 0, slotNum: 2 },
  { id: 2, label: '11:00 AM - 12:00 PM', startHour: 11, startMin: 0, endHour: 12, endMin: 0, slotNum: 3 },
  { id: 3, label: '12:00 - 01:00 PM', startHour: 12, startMin: 0, endHour: 13, endMin: 0, slotNum: 4 },
  { id: 4, label: '01:00 - 02:00 PM', startHour: 13, startMin: 0, endHour: 14, endMin: 0, slotNum: 5 },
  { id: 5, label: '02:00 - 03:00 PM', startHour: 14, startMin: 0, endHour: 15, endMin: 0, slotNum: 6 },
  { id: 6, label: '03:00 - 04:00 PM', startHour: 15, startMin: 0, endHour: 16, endMin: 0, slotNum: 7 },
  { id: 7, label: '04:00 - 05:00 PM', startHour: 16, startMin: 0, endHour: 17, endMin: 0, slotNum: 8 },
  { id: 8, label: '05:00 - 06:00 PM', startHour: 17, startMin: 0, endHour: 18, endMin: 0, slotNum: 9 },
];

export const DAYS = [
  { key: 'Mo', label: 'Monday', shortLabel: 'Mon', dayIndex: 1 },
  { key: 'Tu', label: 'Tuesday', shortLabel: 'Tue', dayIndex: 2 },
  { key: 'We', label: 'Wednesday', shortLabel: 'Wed', dayIndex: 3 },
  { key: 'Th', label: 'Thursday', shortLabel: 'Thu', dayIndex: 4 },
  { key: 'Fr', label: 'Friday', shortLabel: 'Fri', dayIndex: 5 },
];

export const ALL_ROOMS = [
  // 6 Common Classrooms
  { id: 'CR 1', name: 'Classroom 1', code: 'CR 1', category: 'Classrooms' },
  { id: 'CR 2', name: 'Classroom 2', code: 'CR 2', category: 'Classrooms' },
  { id: 'CR 3', name: 'Classroom 3', code: 'CR 3', category: 'Classrooms' },
  { id: 'CR 4', name: 'Classroom 4', code: 'CR 4', category: 'Classrooms' },
  { id: 'CR 5', name: 'Classroom 5', code: 'CR 5', category: 'Classrooms' },
  { id: 'CR 6', name: 'Classroom 6', code: 'CR 6', category: 'Classrooms' },

  // 3 CSE Labs
  { id: 'CSE LAB 1', name: 'CSE Lab 1', code: 'CSE LAB 1', category: 'CSE Labs' },
  { id: 'CSE LAB 2', name: 'CSE Lab 2', code: 'CSE LAB 2', category: 'CSE Labs' },
  { id: 'CSE LAB 3', name: 'CSE Lab 3', code: 'CSE LAB 3', category: 'CSE Labs' },

  // 3 ECE Labs (where ECE Lab 1 is PHY LAB 1 in timetable)
  { id: 'ECE LAB 1', name: 'ECE Lab 1 (Physics Lab)', code: 'ECE LAB 1', category: 'ECE Labs' },
  { id: 'ECE LAB 2', name: 'ECE Lab 2', code: 'ECE LAB 2', category: 'ECE Labs' },
  { id: 'ECE LAB 3', name: 'ECE Lab 3', code: 'ECE LAB 3', category: 'ECE Labs' },
];

export const SCHEDULE = {
  Mo: {
    // Slot 1 (09:00 - 10:00)
    0: {
      'CR 1': { course: 'CS 9117 / CS 743', batch: 'Sem 7 ECE Div 2 / Sem 7 CSE / MTech 1 CSE', faculty: 'PS' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'RDM / SRS' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'ND' },
    },
    // Slot 2 (10:00 - 11:00)
    1: {
      'CR 1': { course: 'CS 305', batch: 'Sem 3 CSE B', faculty: 'TG' },
      'CR 2': { course: 'CS 753', batch: 'Sem 7 ECE', faculty: 'AT' },
      'CR 3': { course: 'CS 501', batch: 'Sem 5 CSE', faculty: 'SA' },
      'CR 4': { course: 'AS 102', batch: 'Sem 1 CSE C', faculty: 'PAS F1' },
      'CR 5': { course: 'MS 101', batch: 'Sem 1 CSE B', faculty: 'AP' },
      'CR 6': { course: 'CS 9116 / CS 742', batch: 'Sem 7 CSE Div 1 / MTech 1 CSE', faculty: 'PJM' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'RDM / SRS' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'ND' },
      'CSE LAB 2': { course: 'EC 912', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'MR' },
    },
    // Slot 3 (11:00 - 12:00)
    2: {
      'CR 1': { course: 'CS 304', batch: 'Sem 3 CSE B', faculty: 'RRP' },
      'CR 2': { course: 'CS 101', batch: 'Sem 1 CSE D', faculty: 'AD' },
      'CR 3': { course: 'EC 301', batch: 'Sem 3 ECE', faculty: 'LC' },
      'CR 4': { course: 'HS 101', batch: 'Sem 1 CSE C', faculty: 'HSS F1' },
      'CR 5': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE / MTech 1 CSE', faculty: 'SA' },
      'CR 6': { course: 'AS 102', batch: 'Sem 1 ECE A', faculty: 'PAS F1' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'DR / NB / PG25CS01' },
      'CSE LAB 2': { course: 'CS 504', batch: 'Sem 5 ECE (Group 1)', faculty: 'SR / KD / PG25CS08' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 ECE (Group 1)', faculty: 'RK / RS25CS02' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'RP / TD' },
      'ECE LAB 3': { course: 'EC 501', batch: 'Sem 5 ECE (Group 2)', faculty: 'SM / SKS' },
      'ECE LAB 1': { course: 'EC 9111', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'HG' },
    },
    // Slot 4 (12:00 - 01:00)
    3: {
      'CR 1': { course: 'CS 302', batch: 'Sem 3 CSE A', faculty: 'DN' },
      'CR 2': { course: 'AS 101', batch: 'Sem 1 CSE D', faculty: '2ND / KY / BP' },
      'CR 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE / MTech 1 DS&Comm', faculty: 'VAP' },
      'CR 4': { course: 'CS 514', batch: 'Sem 5 CSE', faculty: 'SRS' },
      'CR 5': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE / MTech 1 CSE', faculty: 'SA' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'DR / NB / PG25CS01' },
      'CSE LAB 2': { course: 'CS 504', batch: 'Sem 5 ECE (Group 1)', faculty: 'SR / KD / PG25CS08' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 ECE (Group 1)', faculty: 'RK / RS25CS02' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'RP / TD' },
      'ECE LAB 3': { course: 'EC 501', batch: 'Sem 5 ECE (Group 2)', faculty: 'SM / SKS' },
    },
    // Slot 5 (01:00 - 02:00)
    4: {
      'CR 1': { course: 'EC 911', batch: 'MTech 1 ECE', faculty: 'TD' },
      'CR 2': { course: 'CS 701', batch: 'Sem 7 ECE', faculty: 'RK' },
      'CR 3': { course: 'CS 301', batch: 'Sem 3 ECE', faculty: 'MR' },
      'CR 4': { course: 'CS 503', batch: 'Sem 5 CSE', faculty: 'AD' },
      'CR 6': { course: 'HS 101', batch: 'Sem 1 ECE A', faculty: 'HSS F1' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE B (Group 2)', faculty: 'RRP / PG25CS03 / TG' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 CSE (Group 1)', faculty: 'PJM / DN / PG25CS02' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 CSE B (Group 1)', faculty: 'RN / PG25CS07 / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'DP / RDM' },
      'ECE LAB 3': { course: 'CS 911', batch: 'MTech 1 CSE', faculty: 'PS' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'KY' },
    },
    // Slot 6 (02:00 - 03:00)
    5: {
      'CR 1': { course: 'HS 301', batch: 'Sem 3 CSE A', faculty: 'HSS F3' },
      'CR 2': { course: 'MS 101', batch: 'Sem 1 CSE D', faculty: '2APS / VP / AP' },
      'CR 3': { course: 'EC 302', batch: 'Sem 3 ECE', faculty: 'SKS' },
      'CR 4': { course: 'HM 505', batch: 'Sem 5 ECE', faculty: 'HSS F2' },
      'CR 5': { course: 'EC 102', batch: 'Sem 1 CSE B', faculty: 'NA' },
      'CR 6': { course: 'CS 101', batch: 'Sem 1 ECE A', faculty: 'NB' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE B (Group 2)', faculty: 'RRP / PG25CS03 / TG' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 CSE (Group 1)', faculty: 'PJM / DN / PG25CS02' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 CSE B (Group 1)', faculty: 'RN / PG25CS07 / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'DP / RDM' },
      'ECE LAB 3': { course: 'EC 912', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'SR' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'KY' },
    },
    // Slot 7 (03:00 - 04:00)
    6: {
      'CR 1': { course: 'CS 305', batch: 'Sem 3 CSE A', faculty: 'TG' },
      'CR 2': { course: 'HM 505', batch: 'Sem 5 CSE', faculty: 'HSS F2' },
      'CR 3': { course: 'HS 301', batch: 'Sem 3 CSE B', faculty: 'HSS F3' },
      'CR 4': { course: 'EC 501', batch: 'Sem 5 ECE', faculty: 'SM' },
      'CR 5': { course: 'AS 101', batch: 'Sem 1 CSE B', faculty: 'BP' },
      'CR 6': { course: 'CS 101', batch: 'Sem 1 CSE C', faculty: 'DR' },
      'CSE LAB 3': { course: 'CS 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'PG25CS03 / PG25CS06 / AD' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'AT / HG' },
      'ECE LAB 1': { course: 'ECD 911', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
    },
    // Slot 8 (04:00 - 05:00)
    7: {
      'CR 1': { course: 'CS 301', batch: 'Sem 3 CSE A', faculty: 'PJM' },
      'CR 2': { course: 'HS 301', batch: 'Sem 3 ECE', faculty: 'HSS F3' },
      'CR 3': { course: 'CS 302', batch: 'Sem 3 CSE B', faculty: 'DN' },
      'CR 4': { course: 'CS 504', batch: 'Sem 5 ECE', faculty: 'KD' },
      'CSE LAB 3': { course: 'CS 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'PG25CS03 / PG25CS06 / AD' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'AT / HG' },
      'ECE LAB 1': { course: 'ECD 911', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
    },
    // Slot 9 (05:00 - 06:00)
    8: {
      'CR 1': { course: 'CS 303', batch: 'Sem 3 CSE A', faculty: 'RN' },
    },
  },

  Tu: {
    // Slot 1 (09:00 - 10:00)
    0: {
      'CR 2': { course: 'CS 9117 / CS 743', batch: 'Sem 7 ECE Div 2 / Sem 7 CSE / MTech 1 CSE', faculty: 'PS' },
      'CR 6': { course: 'MS 101', batch: 'Sem 1 ECE A', faculty: 'APS' },
      'ECE LAB 2': { course: 'EC 503', batch: 'Sem 5 ECE (Group 2)', faculty: 'HG / RP' },
      'ECE LAB 3': { course: 'EC 501', batch: 'Sem 5 ECE (Group 1)', faculty: 'SM / SKS' },
    },
    // Slot 2 (10:00 - 11:00)
    1: {
      'CR 2': { course: 'CS 701', batch: 'Sem 7 CSE', faculty: 'RK' },
      'CR 3': { course: 'CS 501', batch: 'Sem 5 CSE', faculty: 'SA' },
      'CR 4': { course: 'HS 101', batch: 'Sem 1 CSE C', faculty: 'HSS F1' },
      'CR 5': { course: 'MS 101', batch: 'Sem 1 CSE B', faculty: 'AP' },
      'CR 6': { course: 'AS 102', batch: 'Sem 1 ECE A', faculty: 'PAS F1' },
      'CSE LAB 2': { course: 'CS 911', batch: 'MTech 1 CSE', faculty: 'PS / PG25CS04 / PG25CS02' },
      'ECE LAB 2': { course: 'EC 503', batch: 'Sem 5 ECE (Group 2)', faculty: 'HG / RP' },
      'ECE LAB 3': { course: 'EC 501', batch: 'Sem 5 ECE (Group 1)', faculty: 'SM / SKS' },
    },
    // Slot 3 (11:00 - 12:00)
    2: {
      'CR 1': { course: 'CS 303', batch: 'Sem 3 CSE A', faculty: 'RN' },
      'CR 2': { course: 'EC 102', batch: 'Sem 1 CSE D', faculty: 'DP' },
      'CR 3': { course: 'EC 301', batch: 'Sem 3 ECE', faculty: 'LC' },
      'CR 4': { course: 'AS 102', batch: 'Sem 1 CSE C', faculty: 'PAS F1' },
      'CR 5': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE / MTech 1 CSE', faculty: 'SA' },
      'CR 6': { course: 'HS 101', batch: 'Sem 1 ECE A', faculty: 'HSS F1' },
      'CSE LAB 1': { course: 'CS 504', batch: 'Sem 5 CSE (Group 2)', faculty: 'SR / KD / PG25CS08' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM / PG25CS02 / TG' },
      'CSE LAB 3': { course: 'CS 501', batch: 'Sem 5 CSE (Group 1)', faculty: 'AD / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'RP / AT' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'BP' },
    },
    // Slot 4 (12:00 - 01:00)
    3: {
      'CR 1': { course: 'CS 304', batch: 'Sem 3 CSE A', faculty: 'RRP' },
      'CR 2': { course: 'MS 101', batch: 'Sem 1 CSE D', faculty: 'VP' },
      'CR 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE / MTech 1 DS&Comm', faculty: 'VAP' },
      'CR 4': { course: 'CS 302', batch: 'Sem 3 CSE B', faculty: 'DN' },
      'CR 5': { course: 'CS 913 / CS 702 & EC 911', batch: 'Sem 7 CSE / MTech 1 CSE / MTech 1 ECE', faculty: 'SA / TD' },
      'CSE LAB 1': { course: 'CS 504', batch: 'Sem 5 CSE (Group 2)', faculty: 'SR / KD / PG25CS08' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM / PG25CS02 / TG' },
      'CSE LAB 3': { course: 'CS 501', batch: 'Sem 5 CSE (Group 1)', faculty: 'AD / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'RP / AT' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'BP' },
    },
    // Slot 5 (01:00 - 02:00)
    4: {
      'CR 1': { course: 'EC 503', batch: 'Sem 5 ECE', faculty: 'HG' },
      'CR 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE / Sem 7 CSE / MTech 1 CSE', faculty: 'PJM' },
      'CR 3': { course: 'ECD 911', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
      'CR 4': { course: 'CS 303', batch: 'Sem 3 CSE B', faculty: 'RN' },
      'CR 6': { course: 'MS 101', batch: 'Sem 1 ECE A', faculty: 'APS / VP / AP' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'DR / PG25CS07' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 ECE (Group 1)', faculty: 'PG25CS01 / PS' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'MR / LC' },
      'ECE LAB 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE (Group 2)', faculty: 'SRS / VAP / PG25EC01' },
    },
    // Slot 6 (02:00 - 03:00)
    5: {
      'CR 1': { course: 'EC 9103 / EC 502', batch: 'Sem 5 ECE / MTech 1 ECE', faculty: 'RDM' },
      'CR 2': { course: 'CS 302', batch: 'Sem 3 CSE A', faculty: 'DN' },
      'CR 3': { course: 'AS 101', batch: 'Sem 1 CSE D', faculty: 'ND / KY / BP' },
      'CR 4': { course: 'EC 702', batch: 'Sem 7 ECE', faculty: 'RP' },
      'CR 5': { course: 'EC 102', batch: 'Sem 1 CSE B', faculty: 'NA' },
      'CR 6': { course: 'CS 101', batch: 'Sem 1 ECE A', faculty: 'NB' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'DR / PG25CS07' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 ECE (Group 1)', faculty: 'PG25CS01 / PS' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'MR / LC' },
      'ECE LAB 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE (Group 2)', faculty: 'SRS / VAP / PG25EC01' },
    },
    // Slot 7 (03:00 - 04:00)
    6: {
      'CR 1': { course: 'CS 9106 / EC 761', batch: 'Sem 7 ECE Div 3 / Sem 7 CSE Div 3 / MTech 1 CSE', faculty: 'LC' },
      'CR 3': { course: 'CS 514', batch: 'Sem 5 CSE', faculty: 'SRS' },
      'CR 4': { course: 'AS 101', batch: 'Sem 1 CSE C', faculty: 'KY' },
      'CR 5': { course: 'CS 101', batch: 'Sem 1 CSE B', faculty: 'DR' },
      'CR 6': { course: 'CS 305', batch: 'Sem 3 CSE B', faculty: 'TG' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'PG25CS03 / PG25CS06 / AD' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE A (Group 2)', faculty: 'RN / PG25CS07' },
      'CSE LAB 3': { course: 'CS 302', batch: 'Sem 3 CSE A (Group 1)', faculty: 'DN / PJM' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'DP / RDM' },
      'ECE LAB 1': { course: 'EC 912', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'SR' },
    },
    // Slot 8 (04:00 - 05:00)
    7: {
      'CR 2': { course: 'EC 302', batch: 'Sem 3 ECE', faculty: 'SKS' },
      'CR 3': { course: 'CS 504', batch: 'Sem 5 CSE', faculty: 'KD' },
      'CR 6': { course: 'CS 304', batch: 'Sem 3 CSE B', faculty: 'RRP' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'PG25CS03 / PG25CS06 / AD' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE A (Group 2)', faculty: 'RN / PG25CS07' },
      'CSE LAB 3': { course: 'CS 302', batch: 'Sem 3 CSE A (Group 1)', faculty: 'DN / PJM' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'DP / RDM' },
      'ECE LAB 1': { course: 'HS 911', batch: 'MTech 1 ECE / MTech 1 CSE / MTech 1 DS&Comm', faculty: 'BP / ND' },
    },
    // Slot 9 (05:00 - 06:00)
    8: {
      'CR 1': { course: 'CS 305', batch: 'Sem 3 CSE A', faculty: 'TG' },
      'CR 6': { course: 'CS 301', batch: 'Sem 3 CSE B', faculty: 'MR' },
    },
  },

  We: {
    // Slot 1 (09:00 - 10:00)
    0: {
      'CR 4': { course: 'CS 753', batch: 'Sem 7 CSE', faculty: 'AT' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'PG25CS03 / PG25CS04 / NB' },
      'CSE LAB 3': { course: 'CS 912', batch: 'MTech 1 CSE', faculty: 'TG / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'NA / VAP' },
    },
    // Slot 2 (10:00 - 11:00)
    1: {
      'CR 1': { course: 'CS 701', batch: 'Sem 7 CSE', faculty: 'RK' },
      'CR 2': { course: 'CS 501', batch: 'Sem 5 CSE', faculty: 'SA' },
      'CR 3': { course: 'EC 702', batch: 'Sem 7 ECE', faculty: 'RP' },
      'CR 4': { course: 'EC 102', batch: 'Sem 1 CSE C', faculty: 'DP' },
      'CR 5': { course: 'CS 101', batch: 'Sem 1 CSE B', faculty: 'DR' },
      'CR 6': { course: 'CS 504', batch: 'Sem 5 ECE', faculty: 'KD' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'PG25CS03 / PG25CS04 / NB' },
      'CSE LAB 3': { course: 'CS 912', batch: 'MTech 1 CSE', faculty: 'TG / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'NA / VAP' },
    },
    // Slot 3 (11:00 - 12:00)
    2: {
      'CR 1': { course: 'CS 301', batch: 'Sem 3 CSE A', faculty: 'PJM' },
      'CR 2': { course: 'EC 102', batch: 'Sem 1 CSE D', faculty: 'SR' },
      'CR 3': { course: 'EC 301', batch: 'Sem 3 ECE', faculty: 'LC' },
      'CR 4': { course: 'AS 101', batch: 'Sem 1 CSE C', faculty: 'KY' },
      'CR 5': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE / MTech 1 CSE', faculty: 'SA' },
      'CR 6': { course: 'MS 101', batch: 'Sem 1 ECE A', faculty: 'APS' },
      'CSE LAB 1': { course: 'CS 502', batch: 'Sem 5 CSE (Group 1)', faculty: 'NB / PG25CS08' },
      'CSE LAB 2': { course: 'CS 503', batch: 'Sem 5 CSE (Group 2)', faculty: 'AD / RN / PG25CS04' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'SM / SVR' },
      'ECE LAB 3': { course: 'EC 913 / EC 513', batch: 'Sem 5 ECE Div 2 / MTech 1 ECE', faculty: 'TD' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'ND / BP' },
    },
    // Slot 4 (12:00 - 01:00)
    3: {
      'CR 1': { course: 'CS 304', batch: 'Sem 3 CSE A', faculty: 'RRP' },
      'CR 2': { course: 'AS 102', batch: 'Sem 1 CSE D', faculty: 'PAS F2' },
      'CR 3': { course: 'CS 753', batch: 'Sem 7 ECE', faculty: 'AT' },
      'CR 5': { course: 'CS 305 & CS 913/CS 702', batch: 'Sem 3 CSE B / Sem 7 CSE / MTech 1 CSE', faculty: 'TG / SA' },
      'CR 6': { course: 'CS 514', batch: 'Sem 5 ECE Div 1', faculty: 'SRS' },
      'CSE LAB 1': { course: 'CS 502', batch: 'Sem 5 CSE (Group 1)', faculty: 'NB / PG25CS08' },
      'CSE LAB 2': { course: 'CS 503', batch: 'Sem 5 CSE (Group 2)', faculty: 'AD / RN / PG25CS04' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'SM / SVR' },
      'ECE LAB 3': { course: 'EC 913 / EC 513', batch: 'Sem 5 ECE Div 2 / MTech 1 ECE', faculty: 'TD' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'ND / BP' },
    },
    // Slot 5 (01:00 - 02:00)
    4: {
      'CR 1': { course: 'CS 303', batch: 'Sem 3 CSE A', faculty: 'RN' },
      'CR 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM' },
      'CR 3': { course: 'EC 102', batch: 'Sem 1 ECE A', faculty: 'SR' },
      'CR 4': { course: 'MS 101', batch: 'Sem 1 CSE C', faculty: 'VP' },
      'CSE LAB 1': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE (Group 1) / MTech 1 CSE', faculty: 'PG25CS02 / DR' },
      'CSE LAB 2': { course: 'CS 701', batch: 'Sem 7 CSE (Group 2)', faculty: 'RK / RS25CS02' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 ECE (Group 2)', faculty: 'PG25CS01 / PS' },
      'ECE LAB 2': { course: 'EC 302', batch: 'Sem 3 ECE (Group 1)', faculty: 'NA / SKS / PG25EC03' },
    },
    // Slot 6 (02:00 - 03:00)
    5: {
      'CR 1': { course: 'HS 301', batch: 'Sem 3 CSE B', faculty: 'HSS F3' },
      'CR 2': { course: 'HS 101', batch: 'Sem 1 CSE D', faculty: 'HSS F2' },
      'CR 3': { course: 'HM 505', batch: 'Sem 5 CSE', faculty: 'HSS F2' },
      'CR 4': { course: 'MS 101', batch: 'Sem 1 CSE C', faculty: '4APS / VP / AP' },
      'CR 5': { course: 'AS 102', batch: 'Sem 1 CSE B', faculty: 'PAS F2' },
      'CR 6': { course: 'AS 101', batch: 'Sem 1 ECE A', faculty: 'ND' },
      'CSE LAB 1': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE (Group 1) / MTech 1 CSE', faculty: 'PG25CS02 / DR' },
      'CSE LAB 2': { course: 'CS 701', batch: 'Sem 7 CSE (Group 2)', faculty: 'RK / RS25CS02' },
      'CSE LAB 3': { course: 'CS 303', batch: 'Sem 3 ECE (Group 2)', faculty: 'PG25CS01 / PS' },
      'ECE LAB 2': { course: 'EC 302', batch: 'Sem 3 ECE (Group 1)', faculty: 'NA / SKS / PG25EC03' },
      'ECE LAB 1': { course: 'ECD 911', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
    },
    // Slot 7 (03:00 - 04:00)
    6: {
      'CR 1': { course: 'CS 911', batch: 'MTech 1 CSE', faculty: 'PS' },
      'CR 2': { course: 'HS 301', batch: 'Sem 3 ECE', faculty: 'HSS F3' },
      'CR 3': { course: 'CS 502', batch: 'Sem 5 CSE', faculty: 'NB' },
      'CR 4': { course: 'CS 101', batch: 'Sem 1 CSE C', faculty: 'DR' },
      'CR 5': { course: 'HS 101', batch: 'Sem 1 CSE B', faculty: 'HSS F2' },
      'CR 6': { course: 'HM 505', batch: 'Sem 5 ECE', faculty: 'HSS F2' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE B (Group 1)', faculty: 'RRP / PG25CS03 / TG' },
      'CSE LAB 3': { course: 'CS 302', batch: 'Sem 3 CSE B (Group 2)', faculty: 'DN / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'RDM / DP' },
      'ECE LAB 3': { course: 'EC 912', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'MR' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'KY' },
    },
    // Slot 8 (04:00 - 05:00)
    7: {
      'CR 1': { course: 'HS 301', batch: 'Sem 3 CSE A', faculty: 'HSS F3' },
      'CR 2': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE / MTech 1 DS&Comm', faculty: 'VAP' },
      'CR 3': { course: 'CS 504', batch: 'Sem 5 CSE', faculty: 'KD' },
      'CR 4': { course: 'EC 911', batch: 'MTech 1 ECE', faculty: 'TD' },
      'CR 6': { course: 'EC 503', batch: 'Sem 5 ECE', faculty: 'HG' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE B (Group 1)', faculty: 'RRP / PG25CS03 / TG' },
      'CSE LAB 3': { course: 'CS 302', batch: 'Sem 3 CSE B (Group 2)', faculty: 'DN / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'RDM / DP' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'KY' },
    },
    // Slot 9 (05:00 - 06:00)
    8: {
      'CR 1': { course: 'CS 302', batch: 'Sem 3 CSE A', faculty: 'DN' },
      'CR 2': { course: 'CS 303', batch: 'Sem 3 ECE', faculty: 'PS' },
      'CR 3': { course: 'CS 503', batch: 'Sem 5 CSE', faculty: 'AD' },
      'CR 5': { course: 'CS 303', batch: 'Sem 3 CSE B', faculty: 'RN' },
      'CR 6': { course: 'EC 9103 / EC 502', batch: 'Sem 5 ECE / MTech 1 ECE', faculty: 'RDM' },
    },
  },

  Th: {
    // Slot 1 (09:00 - 10:00)
    0: {
      'CR 1': { course: 'CS 753', batch: 'Sem 7 ECE', faculty: 'AT' },
      'CSE LAB 1': { course: 'CS 9116 / CS 742', batch: 'Sem 7 CSE (Group 2)', faculty: 'PJM / DN / PG25CS02' },
      'CSE LAB 2': { course: 'CS 912', batch: 'MTech 1 CSE', faculty: 'TG / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'NA / SM' },
      'ECE LAB 3': { course: 'EC 913 / EC 513', batch: 'Sem 5 ECE Div 2 / MTech 1 ECE', faculty: 'TD' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'ND' },
    },
    // Slot 2 (10:00 - 11:00)
    1: {
      'CR 1': { course: 'EC 702', batch: 'Sem 7 ECE', faculty: 'RP' },
      'CR 3': { course: 'CS 514', batch: 'Sem 5 ECE Div 1', faculty: 'SRS' },
      'CR 4': { course: 'EC 102', batch: 'Sem 1 CSE C', faculty: 'SR' },
      'CR 6': { course: 'AS 101', batch: 'Sem 1 CSE B', faculty: 'BP' },
      'CSE LAB 1': { course: 'CS 9116 / CS 742', batch: 'Sem 7 CSE (Group 2)', faculty: 'PJM / DN / PG25CS02' },
      'CSE LAB 2': { course: 'CS 912', batch: 'MTech 1 CSE', faculty: 'TG / PG25CS11' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'NA / SM' },
      'ECE LAB 3': { course: 'EC 913 / EC 513', batch: 'Sem 5 ECE Div 2 / MTech 1 ECE', faculty: 'TD' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'ND' },
    },
    // Slot 3 (11:00 - 12:00)
    2: {
      'CR 1': { course: 'CS 753', batch: 'Sem 7 CSE', faculty: 'AT' },
      'CR 2': { course: 'CS 303', batch: 'Sem 3 ECE', faculty: 'PS' },
      'CR 3': { course: 'EC 102', batch: 'Sem 1 CSE D', faculty: 'DP' },
      'CR 4': { course: 'AS 101', batch: 'Sem 1 CSE C', faculty: 'KY' },
      'CR 5': { course: 'CS 701', batch: 'Sem 7 ECE', faculty: 'RK' },
      'CR 6': { course: 'EC 102', batch: 'Sem 1 ECE A', faculty: 'NA' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'DR / NB / PG25CS04' },
      'CSE LAB 2': { course: 'CS 501', batch: 'Sem 5 CSE (Group 2)', faculty: 'AD / PG25CS06' },
      'CSE LAB 3': { course: 'CS 504', batch: 'Sem 5 CSE (Group 1)', faculty: 'SR / KD / PG25CS08' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'RP / HG' },
      'ECE LAB 3': { course: 'ECD 913', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
      'ECE LAB 1': { course: 'EC 9103 / EC 502', batch: 'Sem 5 ECE / MTech 1 ECE', faculty: 'RDM' },
    },
    // Slot 4 (12:00 - 01:00)
    3: {
      'CR 1': { course: 'CS 304', batch: 'Sem 3 CSE A', faculty: 'RRP' },
      'CR 2': { course: 'CS 301', batch: 'Sem 3 ECE', faculty: 'MR' },
      'CR 3': { course: 'MS 101', batch: 'Sem 1 CSE D', faculty: 'VP' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE B (Group 2)', faculty: 'DR / NB / PG25CS04' },
      'CSE LAB 2': { course: 'CS 501', batch: 'Sem 5 CSE (Group 2)', faculty: 'AD / PG25CS06' },
      'CSE LAB 3': { course: 'CS 504', batch: 'Sem 5 CSE (Group 1)', faculty: 'SR / KD / PG25CS08' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE B (Group 1)', faculty: 'RP / HG' },
      'ECE LAB 3': { course: 'ECD 913', batch: 'MTech 1 DS&Comm', faculty: 'SVR' },
      'ECE LAB 1': { course: 'EC 9103 / EC 502', batch: 'Sem 5 ECE / MTech 1 ECE', faculty: 'RDM' },
    },
    // Slot 5 (01:00 - 02:00)
    4: {
      'CR 1': { course: 'CS 305', batch: 'Sem 3 CSE A', faculty: 'TG' },
      'CR 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM' },
      'CR 3': { course: 'CS 302', batch: 'Sem 3 CSE B', faculty: 'DN' },
      'CR 5': { course: 'CS 701', batch: 'Sem 7 CSE', faculty: 'RK' },
      'CR 6': { course: 'MS 101', batch: 'Sem 1 ECE A', faculty: 'APS' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'DR / PG25CS07 / PG25CS01' },
      'CSE LAB 2': { course: 'CS 502', batch: 'Sem 5 CSE (Group 2)', faculty: 'NB / PG25CS08' },
      'CSE LAB 3': { course: 'CS 503', batch: 'Sem 5 CSE (Group 1)', faculty: 'AD / RN / PG25CS04' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'VAP / DP' },
      'ECE LAB 1': { course: 'HS 911', batch: 'MTech 1 ECE / MTech 1 CSE / MTech 1 DS&Comm', faculty: 'BP / ND' },
    },
    // Slot 6 (02:00 - 03:00)
    5: {
      'CR 1': { course: 'CS 9106 / EC 761', batch: 'Sem 7 ECE Div 3 / Sem 7 CSE Div 3 / MTech 1 CSE', faculty: 'LC' },
      'CR 2': { course: 'EC 302', batch: 'Sem 3 ECE', faculty: 'SKS' },
      'CR 3': { course: 'AS 102', batch: 'Sem 1 CSE D', faculty: 'PAS F2' },
      'CR 4': { course: 'EC 501', batch: 'Sem 5 ECE', faculty: 'SM' },
      'CR 5': { course: 'HS 101', batch: 'Sem 1 CSE B', faculty: 'HSS F2' },
      'CR 6': { course: 'AS 101', batch: 'Sem 1 ECE A', faculty: 'ND' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'DR / PG25CS07 / PG25CS01' },
      'CSE LAB 2': { course: 'CS 502', batch: 'Sem 5 CSE (Group 2)', faculty: 'NB / PG25CS08' },
      'CSE LAB 3': { course: 'CS 503', batch: 'Sem 5 CSE (Group 1)', faculty: 'AD / RN / PG25CS04' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'VAP / DP' },
    },
    // Slot 7 (03:00 - 04:00)
    6: {
      'CR 2': { course: 'CS 301', batch: 'Sem 3 CSE B', faculty: 'MR' },
      'CR 3': { course: 'HS 101', batch: 'Sem 1 CSE D', faculty: 'HSS F2' },
      'CR 4': { course: 'CS 504', batch: 'Sem 5 ECE', faculty: 'KD' },
      'CR 5': { course: 'AS 102', batch: 'Sem 1 CSE B', faculty: 'PAS F2' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE A (Group 1)', faculty: 'RRP / TG / PG25CS11' },
      'CSE LAB 2': { course: 'CS 302', batch: 'Sem 3 CSE A (Group 2)', faculty: 'DN / PJM' },
      'ECE LAB 2': { course: 'EC 301', batch: 'Sem 3 ECE (Group 2)', faculty: 'SVR / LC' },
      'ECE LAB 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE (Group 1) / MTech 1 DS&Comm', faculty: 'SRS / VAP / PG25EC01' },
    },
    // Slot 8 (04:00 - 05:00)
    7: {
      'CR 2': { course: 'CS 303', batch: 'Sem 3 CSE B', faculty: 'RN' },
      'CR 3': { course: 'CS 101', batch: 'Sem 1 CSE D', faculty: 'AD' },
      'CR 6': { course: 'CS 502', batch: 'Sem 5 CSE', faculty: 'NB' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE A (Group 1)', faculty: 'RRP / TG / PG25CS11' },
      'CSE LAB 2': { course: 'CS 302', batch: 'Sem 3 CSE A (Group 2)', faculty: 'DN / PJM' },
      'ECE LAB 2': { course: 'EC 301', batch: 'Sem 3 ECE (Group 2)', faculty: 'SVR / LC' },
      'ECE LAB 3': { course: 'EC 303 / EC 9108', batch: 'Sem 3 ECE (Group 1) / MTech 1 DS&Comm', faculty: 'SRS / VAP / PG25EC01' },
    },
    // Slot 9 (05:00 - 06:00)
    8: {},
  },

  Fr: {
    // Slot 1 (09:00 - 10:00)
    0: {
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'PG25CS03 / PG25CS04 / NB' },
      'CSE LAB 2': { course: 'EC 503', batch: 'Sem 5 ECE (Group 1)', faculty: 'HG / RP' },
      'CSE LAB 3': { course: 'CS 504', batch: 'Sem 5 ECE (Group 2)', faculty: 'SR / KD / PG25CS08' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'TD / VAP' },
    },
    // Slot 2 (10:00 - 11:00)
    1: {
      'CR 1': { course: 'CS 753', batch: 'Sem 7 CSE', faculty: 'AT' },
      'CR 2': { course: 'CS 701', batch: 'Sem 7 ECE', faculty: 'RK' },
      'CR 4': { course: 'CS 101', batch: 'Sem 1 CSE C', faculty: 'DR' },
      'CR 5': { course: 'MS 101', batch: 'Sem 1 CSE B', faculty: 'AP' },
      'CSE LAB 1': { course: 'CS 101', batch: 'Sem 1 ECE A (Group 2)', faculty: 'PG25CS03 / PG25CS04 / NB' },
      'CSE LAB 2': { course: 'EC 503', batch: 'Sem 5 ECE (Group 1)', faculty: 'HG / RP' },
      'CSE LAB 3': { course: 'CS 504', batch: 'Sem 5 ECE (Group 2)', faculty: 'SR / KD / PG25CS08' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 ECE A (Group 1)', faculty: 'TD / VAP' },
    },
    // Slot 3 (11:00 - 12:00)
    2: {
      'CR 1': { course: 'CS 911', batch: 'MTech 1 CSE', faculty: 'PS' },
      'CR 2': { course: 'EC 501', batch: 'Sem 5 ECE', faculty: 'SM' },
      'CR 3': { course: 'CS 101', batch: 'Sem 1 CSE D', faculty: 'AD' },
      'CR 4': { course: 'EC 102', batch: 'Sem 1 CSE C', faculty: 'DP' },
      'CR 5': { course: 'EC 102', batch: 'Sem 1 CSE B', faculty: 'SR' },
      'CR 6': { course: 'CS 101', batch: 'Sem 1 ECE A', faculty: 'NB' },
      'CSE LAB 1': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE (Group 2)', faculty: 'PG25CS02 / DR' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM / TG' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 CSE (Group 1)', faculty: 'RK / RS25CS02 / PG25CS01' },
      'ECE LAB 2': { course: 'EC 302', batch: 'Sem 3 ECE (Group 2)', faculty: 'NA / SKS / PG25EC03' },
      'ECE LAB 3': { course: 'EC 301', batch: 'Sem 3 ECE (Group 1)', faculty: 'SVR / LC' },
      'ECE LAB 1': { course: 'EC 911', batch: 'MTech 1 ECE', faculty: 'TD' },
    },
    // Slot 4 (12:00 - 01:00)
    3: {
      'CR 1': { course: 'CS 514', batch: 'Sem 5 CSE', faculty: 'SRS' },
      'CR 2': { course: 'CS 304', batch: 'Sem 3 CSE B', faculty: 'RRP' },
      'CR 3': { course: 'AS 101', batch: 'Sem 1 CSE D', faculty: 'ND / KY / BP' },
      'CR 5': { course: 'MS 101', batch: 'Sem 1 CSE B', faculty: 'AP' },
      'CSE LAB 1': { course: 'CS 913 / CS 702', batch: 'Sem 7 CSE (Group 2)', faculty: 'PG25CS02 / DR' },
      'CSE LAB 2': { course: 'CS 9116 / CS 742', batch: 'Sem 7 ECE Div 1', faculty: 'PJM / TG' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 CSE (Group 1)', faculty: 'RK / RS25CS02 / PG25CS01' },
      'ECE LAB 2': { course: 'EC 302', batch: 'Sem 3 ECE (Group 2)', faculty: 'NA / SKS / PG25EC03' },
      'ECE LAB 3': { course: 'EC 301', batch: 'Sem 3 ECE (Group 1)', faculty: 'SVR / LC' },
    },
    // Slot 5 (01:00 - 02:00)
    4: {
      'CR 1': { course: 'CS 301', batch: 'Sem 3 CSE A', faculty: 'PJM' },
      'CR 2': { course: 'CS 9117 / CS 743', batch: 'Sem 7 ECE Div 2 / Sem 7 CSE / MTech 1 CSE', faculty: 'PS' },
      'CR 3': { course: 'EC 9111', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'SM' },
      'CR 4': { course: 'CS 502', batch: 'Sem 5 CSE', faculty: 'NB' },
      'CR 5': { course: 'EC 503', batch: 'Sem 5 ECE', faculty: 'HG' },
      'CR 6': { course: 'AS 101', batch: 'Sem 1 ECE A', faculty: 'ND' },
      'CSE LAB 1': { course: 'CS 302', batch: 'Sem 3 CSE B (Group 1)', faculty: 'DN / PG25CS11' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE B (Group 2)', faculty: 'RN / PG25CS07 / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'DP / RDM' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'KY' },
    },
    // Slot 6 (02:00 - 03:00)
    5: {
      'CR 2': { course: 'CS 301', batch: 'Sem 3 ECE', faculty: 'MR' },
      'CR 3': { course: 'CS 514', batch: 'Sem 5 ECE Div 1', faculty: 'SRS' },
      'CR 4': { course: 'MS 101', batch: 'Sem 1 CSE D', faculty: 'AP' },
      'CR 5': { course: 'AS 101', batch: 'Sem 1 CSE B', faculty: 'BP' },
      'CR 6': { course: 'EC 102', batch: 'Sem 1 ECE A', faculty: 'NA' },
      'CSE LAB 1': { course: 'CS 302', batch: 'Sem 3 CSE B (Group 1)', faculty: 'DN / PG25CS11' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE B (Group 2)', faculty: 'RN / PG25CS07 / PG25CS06' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE C (Group 1)', faculty: 'DP / RDM' },
      'ECE LAB 3': { course: 'EC 9111', batch: 'MTech 1 ECE / MTech 1 DS&Comm', faculty: 'SM' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE C (Group 2)', faculty: 'KY' },
    },
    // Slot 7 (03:00 - 04:00)
    6: {
      'CR 1': { course: 'CS 503', batch: 'Sem 5 CSE', faculty: 'AD' },
      'CR 2': { course: 'CS 303', batch: 'Sem 3 ECE', faculty: 'PS' },
      'CR 4': { course: 'MS 101', batch: 'Sem 1 CSE C', faculty: 'VP' },
      'CR 5': { course: 'CS 101', batch: 'Sem 1 CSE B', faculty: 'DR' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE A (Group 2)', faculty: 'RRP / TG / PG25CS11' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE A (Group 1)', faculty: 'RN / PG25CS07' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 ECE (Group 2)', faculty: 'RK / RS25CS02 / PG25CS01' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'AT / SKS' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'KY / BP' },
    },
    // Slot 8 (04:00 - 05:00)
    7: {
      'CR 3': { course: 'CS 504', batch: 'Sem 5 CSE', faculty: 'KD' },
      'CR 6': { course: 'CS 301', batch: 'Sem 3 CSE B', faculty: 'MR' },
      'CSE LAB 1': { course: 'CS 304', batch: 'Sem 3 CSE A (Group 2)', faculty: 'RRP / TG / PG25CS11' },
      'CSE LAB 2': { course: 'CS 303', batch: 'Sem 3 CSE A (Group 1)', faculty: 'RN / PG25CS07' },
      'CSE LAB 3': { course: 'CS 701', batch: 'Sem 7 ECE (Group 2)', faculty: 'RK / RS25CS02 / PG25CS01' },
      'ECE LAB 2': { course: 'EC 101', batch: 'Sem 1 CSE D (Group 1)', faculty: 'AT / SKS' },
      'ECE LAB 1': { course: 'AS 101', batch: 'Sem 1 CSE D (Group 2)', faculty: 'KY / BP' },
    },
    // Slot 9 (05:00 - 06:00)
    8: {},
  },
};

/**
 * Returns occupancy info for a given day and slot
 */
export function getRoomOccupancy(dayKey, slotIndex) {
  const daySchedule = SCHEDULE[dayKey] || {};
  const slotOccupancy = daySchedule[slotIndex] || {};

  return ALL_ROOMS.map(room => {
    const occ = slotOccupancy[room.id] || slotOccupancy[room.code];
    return {
      ...room,
      isFree: !occ,
      occupancy: occ || null,
    };
  });
}

/**
 * Returns full weekly schedule for a single room
 */
export function getRoomWeeklySchedule(roomId) {
  const result = {};
  DAYS.forEach(day => {
    result[day.key] = TIME_SLOTS.map((slot, idx) => {
      const occ = SCHEDULE[day.key]?.[idx]?.[roomId];
      return {
        slot,
        isFree: !occ,
        occupancy: occ || null,
      };
    });
  });
  return result;
}
