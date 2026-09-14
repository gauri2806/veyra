import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ItineraryHeader from "../components/ItineraryHeader";
import DayList from "../components/DayList";
import ItineraryTimeline from "../components/ItineraryTimeline";
import AddActivityButton from "../components/AddActivityButton";
import { mockItinerary } from "../data";

export default function ItineraryPage() {
  const navigate = useNavigate();

  const [itinerary, setItinerary] = useState(mockItinerary);

  const [selectedDayId, setSelectedDayId] = useState(
    mockItinerary[0]?.id ?? "",
  );

  const [selectedActivityId, setSelectedActivityId] =
    useState<string | null>(null);

  const selectedDay = itinerary.find(
    (day) => day.id === selectedDayId,
  );

  const handleDaySelect = (dayId: string) => {
    setSelectedDayId(dayId);
    setSelectedActivityId(null);
  };

  const handleActivitySelect = (activityId: string) => {
    setSelectedActivityId(activityId);
  };

  const handleDeleteActivity = (activityId: string) => {
    setItinerary((current) =>
      current.map((day) => ({
        ...day,
        activities: day.activities.filter(
          (activity) => activity.id !== activityId,
        ),
      })),
    );

    setSelectedActivityId(null);
  };

  const handleDuplicateActivity = (activityId: string) => {
    setItinerary((current) =>
      current.map((day) => {
        const activityIndex = day.activities.findIndex(
          (activity) => activity.id === activityId,
        );

        if (activityIndex === -1) {
          return day;
        }

        const activity = day.activities[activityIndex];

        const duplicate = {
          ...activity,
          id: crypto.randomUUID(),
          title: `${activity.title} (Copy)`,
        };

        const activities = [...day.activities];

        activities.splice(activityIndex + 1, 0, duplicate);

        return {
          ...day,
          activities,
        };
      }),
    );
  };

  const handleAddActivity = () => {
    if (!selectedDayId) {
      return;
    }

    const newActivity = {
      id: crypto.randomUUID(),
      title: "Explore a Local Cafe",
      description:
        "Take a relaxed break at a nearby cafe and try a seasonal Kyoto dessert.",
      location: "Central Kyoto",
      startTime: "17:00",
      duration: 60,
      category: "Food",
      estimatedCost: 900,
      priority: "low" as const,
    };

    setItinerary((current) =>
      current.map((day) =>
        day.id === selectedDayId
          ? {
              ...day,
              activities: [...day.activities, newActivity],
            }
          : day,
      ),
    );

    setSelectedActivityId(newActivity.id);
  };

  return (
    <Box
      className="min-h-screen"
      sx={{
        backgroundColor: "#0f1720",
      }}
    >
      <ItineraryHeader
        onBack={() => navigate("/trips")}
      />

      <Box
        className="grid min-h-[calc(100vh-81px)] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]"
      >
        {/* Trip Days Sidebar */}
        <Box
          className="border-b p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-5"
          sx={{
            borderColor: "rgba(127, 149, 170, 0.16)",
          }}
        >
          <DayList
            days={itinerary}
            selectedDayId={selectedDayId}
            onDaySelect={handleDaySelect}
          />
        </Box>

        {/* Main Itinerary */}
        <Box className="min-w-0 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          <Box className="mx-auto max-w-4xl">
            {selectedDay && (
              <>
                <Box className="mb-7">
                  <Box className="flex items-baseline gap-3">
                    <Box
                      component="h1"
                      className="m-0 text-xl font-semibold sm:text-2xl"
                      sx={{
                        color: "#f8fafc",
                      }}
                    >
                      Day {selectedDay.dayNumber}
                    </Box>

                    <Box
                      component="span"
                      className="text-sm"
                      sx={{
                        color: "#64748b",
                      }}
                    >
                      {new Date(
                        `${selectedDay.date}T00:00:00`,
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })}
                    </Box>
                  </Box>
                </Box>

                <ItineraryTimeline
                  activities={selectedDay.activities}
                  selectedActivityId={selectedActivityId}
                  onActivitySelect={handleActivitySelect}
                  onActivityDelete={handleDeleteActivity}
                  onActivityDuplicate={handleDuplicateActivity}
                />

                <AddActivityButton
                  onClick={handleAddActivity}
                />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}