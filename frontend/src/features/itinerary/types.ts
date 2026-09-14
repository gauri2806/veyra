export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  duration: number;
  category: string;
  estimatedCost: number;
  priority: "low" | "medium" | "high";
}

export interface ItineraryDay {
  id: string;
  date: string;
  dayNumber: number;
  activities: Activity[];
}