import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import TripGrid from "../components/TripGrid";
import EmptyTrips from "../components/EmptyTrips";
import { mockTrips } from "../data";
import { theme } from "../../../app/theme";

export default function TripsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("recent");
    const navigate = useNavigate();

    const displayedTrips = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        const filteredTrips = mockTrips.filter((trip) => {
            if (!query) return true;

            const matchesDestination = trip.destination
                .toLowerCase()
                .includes(query);

            const matchesInterest = trip.interests.some((interest) =>
                interest.toLowerCase().includes(query)
            );

            return matchesDestination || matchesInterest;
        });

        return [...filteredTrips].sort((a, b) => {
            if (sortBy === "recent") {
                return (
                    new Date(b.updatedAt).getTime() -
                    new Date(a.updatedAt).getTime()
                );
            }

            if (sortBy === "date") {
                return (
                    new Date(a.startDate).getTime() -
                    new Date(b.startDate).getTime()
                );
            }

            if (sortBy === "destination") {
                return a.destination.localeCompare(b.destination);
            }

            return 0;
        });
    }, [searchQuery, sortBy]);

    return (
        <Box className="max-w-7xl mx-auto">
            {/* Header */}
            <Box className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <Box>
                    <Typography
                        sx={{
                            color: theme.colors.text,
                            fontSize: { xs: "1.5rem", md: "1.75rem" },
                            fontWeight: 600,
                        }}
                    >
                        My Trips
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.colors.textMuted,
                            fontSize: "0.9rem",
                            mt: 0.5,
                        }}
                    >
                        Manage your travel plans and explore new destinations.
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<Plus size={17} />}
                    onClick={() => navigate("/trips/new")}
                    sx={{
                        alignSelf: { xs: "stretch", md: "auto" },
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
                    New Trip
                </Button>
            </Box>

            {/* Controls */}
            <Box
                className="flex flex-col sm:flex-row gap-3 mt-8"
                sx={{
                    width: "100%",
                }}
            >
                <TextField
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search trips..."
                    size="small"
                    sx={{
                        flex: 1,
                        maxWidth: { sm: 360 },
                        "& .MuiOutlinedInput-root": {
                            color: theme.colors.text,
                            backgroundColor: theme.colors.surface,
                            borderRadius: "8px",

                            "& fieldset": {
                                borderColor: theme.colors.border,
                            },

                            "&:hover fieldset": {
                                borderColor: theme.colors.textMuted,
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: theme.colors.accent,
                            },
                        },

                        "& .MuiInputBase-input::placeholder": {
                            color: theme.colors.textMuted,
                            opacity: 1,
                        },
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <Search
                                    size={17}
                                    color={theme.colors.textMuted}
                                    style={{ marginRight: 8 }}
                                />
                            ),
                        },
                    }}
                />

                <TextField
                    select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    size="small"
                    sx={{
                        width: { xs: "100%", sm: 180 },

                        "& .MuiOutlinedInput-root": {
                            color: theme.colors.textSecondary,
                            backgroundColor: theme.colors.surface,
                            borderRadius: "8px",

                            "& fieldset": {
                                borderColor: theme.colors.border,
                            },

                            "&:hover fieldset": {
                                borderColor: theme.colors.textMuted,
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: theme.colors.accent,
                            },
                        },
                    }}
                >
                    <MenuItem value="recent">Recently updated</MenuItem>
                    <MenuItem value="date">Trip date</MenuItem>
                    <MenuItem value="destination">Destination</MenuItem>
                </TextField>
            </Box>

            {/* Trips */}
            <Box className="mt-8">
                <Typography
                    sx={{
                        color: theme.colors.text,
                        fontSize: "1rem",
                        fontWeight: 600,
                        mb: 2.5,
                    }}
                >
                    All Trips
                </Typography>

                {displayedTrips.length > 0 ? (
                    <TripGrid trips={displayedTrips} />
                ) : (
                    <EmptyTrips searchActive={searchQuery.trim().length > 0} />
                )}
            </Box>
        </Box>
    );
}