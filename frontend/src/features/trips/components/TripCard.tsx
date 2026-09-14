import { Box, IconButton, Typography } from "@mui/material";
import { MoreHorizontal, Users } from "lucide-react";
import type { Trip } from "../types";
import { theme } from "../../../app/theme";

type TripCardProps = {
    trip: Trip;
};

export default function TripCard({ trip }: TripCardProps) {
    const formattedStartDate = new Date(trip.startDate).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
        }
    );

    const formattedEndDate = new Date(trip.endDate).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
        }
    );

    return (
        <Box
            sx={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: "10px",
                overflow: "hidden",
                "&:hover": {
                    borderColor: theme.colors.textMuted,
                    transform: "translateY(-2px)",
                },
                transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
        >
            {/* Destination image */}
            <Box
                component="img"
                src={trip.imageUrl}
                alt={trip.destination}
                sx={{
                    width: "100%",
                    height: 180,
                    display: "block",
                    objectFit: "cover",
                }}
            />

            {/* Card content */}
            <Box className="p-4">
                {/* Destination + menu */}
                <Box className="flex items-center justify-between gap-2">
                    <Typography
                        sx={{
                            color: theme.colors.text,
                            fontSize: "1rem",
                            fontWeight: 600,
                        }}
                    >
                        {trip.destination}
                    </Typography>

                    <IconButton
                        size="small"
                        sx={{
                            color: theme.colors.textMuted,
                            "&:hover": {
                                color: theme.colors.text,
                                backgroundColor: theme.colors.elevated,
                            },
                        }}
                    >
                        <MoreHorizontal size={18} />
                    </IconButton>
                </Box>

                {/* Dates + travelers */}
                <Box className="flex items-center gap-2 mt-2">
                    <Typography
                        sx={{
                            color: theme.colors.textSecondary,
                            fontSize: "0.875rem",
                        }}
                    >
                        {formattedStartDate} – {formattedEndDate}
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.colors.textMuted,
                            fontSize: "0.875rem",
                        }}
                    >
                        ·
                    </Typography>

                    <Box className="flex items-center gap-1">
                        <Users size={14} color={theme.colors.textMuted} />

                        <Typography
                            sx={{
                                color: theme.colors.textSecondary,
                                fontSize: "0.875rem",
                            }}
                        >
                            {trip.travelers}
                        </Typography>
                    </Box>
                </Box>

                {/* Interest tags */}
                <Box className="flex flex-wrap gap-2 mt-3">
                    {trip.interests.slice(0, 3).map((interest) => (
                        <Box
                            key={interest}
                            sx={{
                                px: 1,
                                py: 0.5,
                                borderRadius: "6px",
                                backgroundColor: theme.colors.elevated,
                                color: theme.colors.textSecondary,
                                fontSize: "0.75rem",
                            }}
                        >
                            {interest}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}