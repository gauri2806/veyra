import { Box } from "@mui/material";
import TripCard from "./TripCard";
import type { Trip } from "../types";

type TripGridProps = {
  trips: Trip[];
};

export default function TripGrid({ trips }: TripGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        },
        gap: 2.5,
      }}
    >
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </Box>
  );
}