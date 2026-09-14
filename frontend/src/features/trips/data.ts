import type { Trip } from "./types";

export const mockTrips: Trip[] = [
  {
    id: "trip-1",
    destination: "Kyoto, Japan",
    startDate: "2026-10-12",
    endDate: "2026-10-18",
    travelers: 2,
    budget: 1200,
    interests: ["Culture", "Food", "Nature"],
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    updatedAt: "2026-09-12",
  },
  {
    id: "trip-2",
    destination: "Bali, Indonesia",
    startDate: "2026-11-05",
    endDate: "2026-11-11",
    travelers: 2,
    budget: 950,
    interests: ["Beaches", "Food", "Relaxation"],
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    updatedAt: "2026-09-12"
  },
  {
    id: "trip-3",
    destination: "Swiss Alps, Switzerland",
    startDate: "2026-12-20",
    endDate: "2026-12-28",
    travelers: 4,
    budget: 2400,
    interests: ["Mountains", "Adventure", "Nature"],
    imageUrl: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    updatedAt: "2026-09-10"
  },
  {
    id: "trip-4",
    destination: "Lisbon, Portugal",
    startDate: "2027-01-15",
    endDate: "2027-01-21",
    travelers: 2,
    budget: 1400,
    interests: ["Architecture", "Food", "Culture"],
    imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
    updatedAt: "2026-09-08"
  },
  {
    id: "trip-5",
    destination: "New York, USA",
    startDate: "2027-02-08",
    endDate: "2027-02-14",
    travelers: 3,
    budget: 1800,
    interests: ["City Life", "Food", "Shopping"],
    imageUrl: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    updatedAt: "2026-09-05"
  },
  {
    id: "trip-6",
    destination: "Queenstown, New Zealand",
    startDate: "2027-03-10",
    endDate: "2027-03-18",
    travelers: 2,
    budget: 2200,
    interests: ["Adventure", "Nature", "Hiking"],
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
    updatedAt: "2026-09-03"
  },
];