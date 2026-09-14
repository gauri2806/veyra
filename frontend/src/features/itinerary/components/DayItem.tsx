import { Box, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";

import type { ItineraryDay } from "../types";

type DayItemProps = {
  day: ItineraryDay;
  selected: boolean;
  onClick: () => void;
};

export default function DayItem({
  day,
  selected,
  onClick,
}: DayItemProps) {
  const formattedDate = new Date(`${day.date}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
    },
  );

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      className="group flex w-full items-center rounded-xl px-3 py-3 text-left transition-all duration-150"
      sx={{
        backgroundColor: selected
          ? "rgba(148, 163, 184, 0.12)"
          : "transparent",

        "&:hover": {
          backgroundColor: selected
            ? "rgba(148, 163, 184, 0.16)"
            : "rgba(148, 163, 184, 0.06)",
        },
      }}
    >
      <Box
        className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        sx={{
          backgroundColor: selected
            ? "rgba(148, 163, 184, 0.16)"
            : "rgba(148, 163, 184, 0.06)",
        }}
      >
        <Typography
          variant="caption"
          className="!font-semibold"
          sx={{
            color: selected ? "#f8fafc" : "#64748b",
          }}
        >
          {day.dayNumber}
        </Typography>
      </Box>

      <Box className="min-w-0 flex-1">
        <Typography
          variant="body2"
          className="!font-medium"
          sx={{
            color: selected ? "#f8fafc" : "#cbd5e1",
          }}
        >
          Day {day.dayNumber}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#64748b",
          }}
        >
          {formattedDate}
        </Typography>
      </Box>

      <ChevronRight
        size={16}
        className="shrink-0 transition-transform duration-150"
        style={{
          color: selected ? "#94a3b8" : "#475569",
          transform: selected ? "translateX(2px)" : "translateX(0)",
        }}
      />
    </Box>
  );
}