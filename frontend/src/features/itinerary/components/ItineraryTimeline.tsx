import { Box } from "@mui/material";

import type { Activity } from "../types";
import ActivityCard from "./ActivityCard";
import ActivityTime from "./ActivityTime";

type ItineraryTimelineProps = {
  activities: Activity[];
  selectedActivityId: string | null;
  onActivitySelect: (activityId: string) => void;
  onActivityDelete: (activityId: string) => void;
  onActivityDuplicate: (activityId: string) => void;
};

export default function ItineraryTimeline({
  activities,
  selectedActivityId,
  onActivitySelect,
  onActivityDelete,
  onActivityDuplicate,
}: ItineraryTimelineProps) {
  const sortedActivities = [...activities].sort((a, b) =>
    a.startTime.localeCompare(b.startTime),
  );

  return (
    <Box className="space-y-0">
      {sortedActivities.map((activity, index) => {
        const isLast = index === sortedActivities.length - 1;

        return (
          <Box
            key={activity.id}
            className="relative flex gap-3 sm:gap-5"
          >
            <ActivityTime time={activity.startTime} />

            <Box className="relative flex w-4 shrink-0 justify-center">
              <Box
                className="mt-2 h-2.5 w-2.5 rounded-full border"
                sx={{
                  backgroundColor: "#0f1720",
                  borderColor:
                    selectedActivityId === activity.id
                      ? "#cbd5e1"
                      : "#64748b",
                  zIndex: 1,
                }}
              />

              {!isLast && (
                <Box
                  className="absolute top-5 bottom-0 w-px"
                  sx={{
                    backgroundColor:
                      "rgba(127, 149, 170, 0.16)",
                  }}
                />
              )}
            </Box>

            <Box className="min-w-0 flex-1 pb-6">
              <ActivityCard
                activity={activity}
                selected={selectedActivityId === activity.id}
                onSelect={() => onActivitySelect(activity.id)}
                onDelete={() => onActivityDelete(activity.id)}
                onDuplicate={() =>
                  onActivityDuplicate(activity.id)
                }
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}