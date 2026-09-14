import { Box, Button, Typography } from "@mui/material";
import { Map, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { theme } from "../../../app/theme";

type EmptyTripsProps = {
    searchActive?: boolean;
};

export default function EmptyTrips({
    searchActive = false,
}: EmptyTripsProps) {
    const navigate = useNavigate();

    return (
        <Box
            className="flex flex-col items-center justify-center text-center"
            sx={{
                minHeight: 360,
                border: `1px dashed ${theme.colors.border}`,
                borderRadius: "10px",
                backgroundColor: theme.colors.surface,
                px: 3,
                py: 6,
            }}
        >
            {/* Icon */}
            <Box
                className="flex items-center justify-center"
                sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "10px",
                    backgroundColor: theme.colors.elevated,
                    color: theme.colors.textSecondary,
                    mb: 2.5,
                }}
            >
                <Map size={22} strokeWidth={1.7} />
            </Box>

            {/* Heading */}
            <Typography
                sx={{
                    color: theme.colors.text,
                    fontSize: "1rem",
                    fontWeight: 600,
                }}
            >
                {searchActive
                    ? "No trips found."
                    : "You haven't planned a trip yet."}
            </Typography>


            {/* Description */}
            <Typography
                sx={{
                    color: theme.colors.textMuted,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    maxWidth: 380,
                    mt: 1,
                }}
            >
                {searchActive
                    ? "Try a different destination or interest."
                    : "Start with a destination and let Veyra build your first itinerary."}
            </Typography>

            {/* CTA */}
            {!searchActive && (
                <Button
                    variant="contained"
                    startIcon={<Plus size={17} />}
                    onClick={() => navigate("/trips/new")}
                    sx={{
                        mt: 3,
                        backgroundColor: theme.colors.accent,
                        color: theme.colors.background,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: "8px",
                        px: 2,
                        py: 1,
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: theme.colors.text,
                            boxShadow: "none",
                        },
                    }}
                >
                    Create your first trip
                </Button>
            )}
        </Box>
    );
}