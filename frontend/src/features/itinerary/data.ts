import type { ItineraryDay } from "./types";

export const mockItinerary: ItineraryDay[] = [
  {
    id: "day-1",
    date: "2026-10-12",
    dayNumber: 1,
    activities: [
      {
        id: "activity-1-1",
        title: "Fushimi Inari Shrine",
        description:
          "Start the trip with an early walk through Kyoto's iconic vermilion torii gates and forest trails.",
        location: "Fushimi Inari Taisha",
        startTime: "09:00",
        duration: 120,
        category: "Culture",
        estimatedCost: 0,
        priority: "high",
      },
      {
        id: "activity-1-2",
        title: "Nishiki Market",
        description:
          "Explore Kyoto's famous food market and try local specialties, pickles, sweets, and street food.",
        location: "Nishiki Market",
        startTime: "12:30",
        duration: 90,
        category: "Food",
        estimatedCost: 1200,
        priority: "high",
      },
      {
        id: "activity-1-3",
        title: "Gion District",
        description:
          "Wander through traditional streets, machiya houses, small shops, and historic tea houses.",
        location: "Gion",
        startTime: "15:00",
        duration: 120,
        category: "Culture",
        estimatedCost: 0,
        priority: "medium",
      },
      {
        id: "activity-1-4",
        title: "Pontocho Alley",
        description:
          "End the first day with dinner and an atmospheric evening walk along the narrow Pontocho lane.",
        location: "Pontocho",
        startTime: "19:00",
        duration: 120,
        category: "Nightlife",
        estimatedCost: 3500,
        priority: "medium",
      },
    ],
  },

  {
    id: "day-2",
    date: "2026-10-13",
    dayNumber: 2,
    activities: [
      {
        id: "activity-2-1",
        title: "Arashiyama Bamboo Grove",
        description:
          "Walk through the towering bamboo forest before the area gets busy.",
        location: "Arashiyama",
        startTime: "09:30",
        duration: 90,
        category: "Nature",
        estimatedCost: 0,
        priority: "high",
      },
      {
        id: "activity-2-2",
        title: "Local Lunch",
        description:
          "Take a relaxed lunch break at a small local restaurant around Arashiyama.",
        location: "Arashiyama",
        startTime: "12:00",
        duration: 60,
        category: "Food",
        estimatedCost: 1500,
        priority: "medium",
      },
      {
        id: "activity-2-3",
        title: "Tenryu-ji Temple",
        description:
          "Explore one of Arashiyama's most important Zen temples and its landscaped garden.",
        location: "Tenryu-ji",
        startTime: "14:00",
        duration: 90,
        category: "History",
        estimatedCost: 500,
        priority: "high",
      },
      {
        id: "activity-2-4",
        title: "Katsura River Evening Walk",
        description:
          "Slow down with a scenic riverside walk and views of the surrounding mountains.",
        location: "Katsura River",
        startTime: "18:30",
        duration: 60,
        category: "Nature",
        estimatedCost: 0,
        priority: "low",
      },
    ],
  },

  {
    id: "day-3",
    date: "2026-10-14",
    dayNumber: 3,
    activities: [
      {
        id: "activity-3-1",
        title: "Kinkaku-ji",
        description:
          "Visit Kyoto's Golden Pavilion and explore the surrounding gardens.",
        location: "Kinkaku-ji",
        startTime: "09:00",
        duration: 90,
        category: "Culture",
        estimatedCost: 500,
        priority: "high",
      },
      {
        id: "activity-3-2",
        title: "Ryoan-ji Zen Garden",
        description:
          "Spend some quiet time at the famous rock garden and temple grounds.",
        location: "Ryoan-ji",
        startTime: "11:00",
        duration: 75,
        category: "Wellness",
        estimatedCost: 500,
        priority: "medium",
      },
      {
        id: "activity-3-3",
        title: "Tea House Experience",
        description:
          "Learn about Japanese tea culture during a traditional tea ceremony.",
        location: "Northern Kyoto",
        startTime: "14:30",
        duration: 90,
        category: "Culture",
        estimatedCost: 2500,
        priority: "high",
      },
      {
        id: "activity-3-4",
        title: "Philosopher's Path",
        description:
          "Take a peaceful walk beside the canal lined with temples, gardens, and small cafes.",
        location: "Philosopher's Path",
        startTime: "17:00",
        duration: 90,
        category: "Nature",
        estimatedCost: 0,
        priority: "low",
      },
    ],
  },

  {
    id: "day-4",
    date: "2026-10-15",
    dayNumber: 4,
    activities: [
      {
        id: "activity-4-1",
        title: "Nijo Castle",
        description:
          "Discover the historic castle grounds and learn about Kyoto's samurai-era history.",
        location: "Nijo Castle",
        startTime: "09:30",
        duration: 120,
        category: "History",
        estimatedCost: 1300,
        priority: "high",
      },
      {
        id: "activity-4-2",
        title: "Kyoto Imperial Palace",
        description:
          "Walk through the former imperial residence and its expansive gardens.",
        location: "Kyoto Imperial Palace",
        startTime: "12:30",
        duration: 90,
        category: "History",
        estimatedCost: 0,
        priority: "medium",
      },
      {
        id: "activity-4-3",
        title: "Sake Tasting",
        description:
          "Sample a selection of local sake and learn about Kyoto's brewing traditions.",
        location: "Fushimi Sake District",
        startTime: "15:30",
        duration: 90,
        category: "Food",
        estimatedCost: 2200,
        priority: "high",
      },
      {
        id: "activity-4-4",
        title: "Fushimi Evening Streets",
        description:
          "Explore the atmospheric canals and traditional streets around Fushimi.",
        location: "Fushimi",
        startTime: "18:30",
        duration: 90,
        category: "Culture",
        estimatedCost: 0,
        priority: "low",
      },
    ],
  },

  {
    id: "day-5",
    date: "2026-10-16",
    dayNumber: 5,
    activities: [
      {
        id: "activity-5-1",
        title: "Kiyomizu-dera",
        description:
          "Visit one of Kyoto's most celebrated temples and enjoy panoramic city views.",
        location: "Kiyomizu-dera",
        startTime: "09:00",
        duration: 120,
        category: "Culture",
        estimatedCost: 500,
        priority: "high",
      },
      {
        id: "activity-5-2",
        title: "Higashiyama Streets",
        description:
          "Browse traditional shops and small cafes while walking through the historic district.",
        location: "Higashiyama",
        startTime: "11:30",
        duration: 120,
        category: "Shopping",
        estimatedCost: 1800,
        priority: "medium",
      },
      {
        id: "activity-5-3",
        title: "Japanese Cooking Class",
        description:
          "Prepare a few classic Japanese dishes with a local instructor.",
        location: "Central Kyoto",
        startTime: "15:00",
        duration: 150,
        category: "Food",
        estimatedCost: 5500,
        priority: "high",
      },
      {
        id: "activity-5-4",
        title: "Gion at Night",
        description:
          "Return to Gion after dark for a quieter walk through its lantern-lit streets.",
        location: "Gion",
        startTime: "19:30",
        duration: 60,
        category: "Photography",
        estimatedCost: 0,
        priority: "low",
      },
    ],
  },

  {
    id: "day-6",
    date: "2026-10-17",
    dayNumber: 6,
    activities: [
      {
        id: "activity-6-1",
        title: "Kurama Mountain Walk",
        description:
          "Take a scenic half-day escape into the mountains north of Kyoto.",
        location: "Kurama",
        startTime: "08:30",
        duration: 180,
        category: "Adventure",
        estimatedCost: 1200,
        priority: "high",
      },
      {
        id: "activity-6-2",
        title: "Onsen Relaxation",
        description:
          "Unwind at a traditional hot spring after the mountain walk.",
        location: "Kurama Onsen",
        startTime: "13:00",
        duration: 120,
        category: "Wellness",
        estimatedCost: 1500,
        priority: "high",
      },
      {
        id: "activity-6-3",
        title: "Cafe & Matcha Break",
        description:
          "Take a slow afternoon break with matcha and a seasonal Japanese dessert.",
        location: "Demachiyanagi",
        startTime: "16:30",
        duration: 60,
        category: "Food",
        estimatedCost: 900,
        priority: "low",
      },
      {
        id: "activity-6-4",
        title: "Kamogawa River Sunset",
        description:
          "Relax beside the Kamo River and watch the city settle into the evening.",
        location: "Kamo River",
        startTime: "18:00",
        duration: 90,
        category: "Nature",
        estimatedCost: 0,
        priority: "medium",
      },
    ],
  },

  {
    id: "day-7",
    date: "2026-10-18",
    dayNumber: 7,
    activities: [
      {
        id: "activity-7-1",
        title: "Nanzen-ji Temple",
        description:
          "Explore the temple complex and its impressive Sanmon gate before departure.",
        location: "Nanzen-ji",
        startTime: "09:00",
        duration: 90,
        category: "History",
        estimatedCost: 500,
        priority: "medium",
      },
      {
        id: "activity-7-2",
        title: "Souvenir Shopping",
        description:
          "Pick up ceramics, tea, sweets, and other small gifts from local Kyoto shops.",
        location: "Teramachi Street",
        startTime: "11:00",
        duration: 120,
        category: "Shopping",
        estimatedCost: 3000,
        priority: "high",
      },
      {
        id: "activity-7-3",
        title: "Final Kyoto Lunch",
        description:
          "Have one last relaxed meal featuring a few Kyoto specialties.",
        location: "Central Kyoto",
        startTime: "13:30",
        duration: 75,
        category: "Food",
        estimatedCost: 1800,
        priority: "high",
      },
      {
        id: "activity-7-4",
        title: "Kyoto Station",
        description:
          "Head back to Kyoto Station with enough time for your onward journey.",
        location: "Kyoto Station",
        startTime: "16:00",
        duration: 60,
        category: "Travel",
        estimatedCost: 500,
        priority: "high",
      },
    ],
  },
];