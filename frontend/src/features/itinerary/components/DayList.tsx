import { Box, Typography } from "@mui/material";

import type { ItineraryDay } from "../types";
import DayItem from "./DayItem";

type DayListProps = {
  days: ItineraryDay[];
  selectedDayId: string;
  onDaySelect: (dayId: string) => void;
};

export default function DayList({
  days,
  selectedDayId,
  onDaySelect,
}: DayListProps) {
  return (
    <Box className="flex h-full flex-col">
      <Box className="mb-5 px-2">
        <Typography
          variant="overline"
          className="!font-semibold !tracking-[0.14em]"
          sx={{ color: "#64748b" }}
        >
          Your trip
        </Typography>

        <Typography
          variant="h6"
          className="!mt-1 !font-semibold"
          sx={{ color: "#f8fafc" }}
        >
          Kyoto, Japan
        </Typography>
      </Box>

      <Box className="space-y-1">
        {days.map((day) => (
          <DayItem
            key={day.id}
            day={day}
            selected={day.id === selectedDayId}
            onClick={() => onDaySelect(day.id)}
          />
        ))}
      </Box>
    </Box>
  );
}