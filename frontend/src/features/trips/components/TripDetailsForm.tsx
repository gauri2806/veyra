import { useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InterestSelector from "./InterestSelector";
import PreferenceSelector from "./PreferenceSelector";

type TripFormData = {
    destination: string;
    startDate: string;
    endDate: string;
    travelers: number;
    interests: string[];
    travelPace: "Relaxed" | "Balanced" | "Packed" | "";
    budget: "Budget" | "Moderate" | "Premium" | "";
    walkingPreference:
    | "Minimal walking"
    | "Some walking"
    | "Walking is fine"
    | "";
    aiIntent: string;
};


export default function TripDetailsForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<TripFormData>({
        destination: "",
        startDate: "",
        endDate: "",
        travelers: 2,
        interests: [],
        travelPace: "",
        budget: "",
        walkingPreference: "",
        aiIntent: "",
    });

    const [errors, setErrors] = useState<{
        destination?: string;
        startDate?: string;
        endDate?: string;
        travelers?: string;
    }>({});

    const [isGenerating, setIsGenerating] = useState(false);

    const validateForm = () => {
        const nextErrors: typeof errors = {};

        if (!formData.destination.trim()) {
            nextErrors.destination = "Destination is required.";
        }

        if (!formData.startDate) {
            nextErrors.startDate = "Start date is required.";
        }

        if (!formData.endDate) {
            nextErrors.endDate = "End date is required.";
        }

        if (
            formData.startDate &&
            formData.endDate &&
            formData.endDate <= formData.startDate
        ) {
            nextErrors.endDate = "End date must be after the start date.";
        }

        if (formData.travelers < 1 || formData.travelers > 20) {
            nextErrors.travelers = "Travelers must be between 1 and 20.";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const canGenerate =
        formData.destination.trim() !== "" &&
        formData.startDate !== "" &&
        formData.endDate !== "";

    const updateField = <K extends keyof TripFormData>(
        field: K,
        value: TripFormData[K],
    ) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleTravelerChange = (change: number) => {
        setFormData((current) => ({
            ...current,
            travelers: Math.min(20, Math.max(1, current.travelers + change)),
        }));
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        setIsGenerating(true);

        setTimeout(() => {
            const tripId = crypto.randomUUID();

            console.log("Trip created:", {
                id: tripId,
                ...formData,
            });

            navigate(`/trips/${tripId}`);
        }, 900);
    };

    return (
        <Box
            component="form"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
            className="space-y-8"
        >
            <Box className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Trip details */}
                <Box className="space-y-8">
                    {/* Destination */}
                    <Box>
                        <Typography
                            variant="subtitle1"
                            className="!mb-2 !font-medium"
                            sx={{ color: "#f8fafc" }}
                        >
                            Where are you going?
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="e.g. Kyoto, Japan"
                            value={formData.destination}
                            onChange={(event) =>
                                updateField("destination", event.target.value)
                            }
                            error={Boolean(errors.destination)}
                            helperText={errors.destination}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "#1b2635",
                                    borderRadius: "12px",
                                    color: "#f8fafc",

                                    "& fieldset": {
                                        borderColor: "rgba(127, 149, 170, 0.2)",
                                    },

                                    "&:hover fieldset": {
                                        borderColor: "rgba(127, 149, 170, 0.4)",
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor: "#94a3b8",
                                    },
                                },

                                "& .MuiInputBase-input::placeholder": {
                                    color: "#64748b",
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>

                    {/* Dates */}
                    <Box>
                        <Typography
                            variant="subtitle1"
                            className="!mb-2 !font-medium"
                            sx={{ color: "#f8fafc" }}
                        >
                            When are you going?
                        </Typography>

                        <Box className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <TextField
                                fullWidth
                                type="date"
                                label="Start date"
                                value={formData.startDate}
                                onChange={(event) =>
                                    updateField("startDate", event.target.value)
                                }
                                error={Boolean(errors.startDate)}
                                helperText={errors.startDate}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#1b2635",
                                        borderRadius: "12px",
                                        color: "#f8fafc",

                                        "& fieldset": {
                                            borderColor: "rgba(127, 149, 170, 0.2)",
                                        },

                                        "&:hover fieldset": {
                                            borderColor: "rgba(127, 149, 170, 0.4)",
                                        },

                                        "&.Mui-focused fieldset": {
                                            borderColor: "#94a3b8",
                                        },
                                    },

                                    "& .MuiInputLabel-root": {
                                        color: "#94a3b8",
                                    },
                                }}
                            />

                            <Typography
                                className="hidden !text-slate-500 sm:block"
                                aria-hidden="true"
                            >
                                —
                            </Typography>

                            <TextField
                                fullWidth
                                type="date"
                                label="End date"
                                value={formData.endDate}
                                onChange={(event) =>
                                    updateField("endDate", event.target.value)
                                }
                                error={Boolean(errors.endDate)}
                                helperText={errors.endDate}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#1b2635",
                                        borderRadius: "12px",
                                        color: "#f8fafc",

                                        "& fieldset": {
                                            borderColor: "rgba(127, 149, 170, 0.2)",
                                        },

                                        "&:hover fieldset": {
                                            borderColor: "rgba(127, 149, 170, 0.4)",
                                        },

                                        "&.Mui-focused fieldset": {
                                            borderColor: "#94a3b8",
                                        },
                                    },

                                    "& .MuiInputLabel-root": {
                                        color: "#94a3b8",
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Travelers */}
                    <Box>
                        <Typography
                            variant="subtitle1"
                            className="!mb-2 !font-medium"
                            sx={{ color: "#f8fafc" }}
                        >
                            Who's going?
                        </Typography>

                        <Box className="flex w-fit items-center rounded-xl border border-slate-700/40 bg-[#1b2635] p-1">
                            <IconButton
                                type="button"
                                size="small"
                                aria-label="Decrease travelers"
                                disabled={formData.travelers <= 1}
                                onClick={() => handleTravelerChange(-1)}
                                className="!text-slate-400"
                            >
                                <Minus size={16} />
                            </IconButton>

                            <Typography
                                className="min-w-32 text-center !text-sm !font-medium"
                                sx={{ color: "#f8fafc" }}
                            >
                                {formData.travelers}{" "}
                                {formData.travelers === 1 ? "traveler" : "travelers"}
                            </Typography>

                            <IconButton
                                type="button"
                                size="small"
                                aria-label="Increase travelers"
                                disabled={formData.travelers >= 20}
                                onClick={() => handleTravelerChange(1)}
                                className="!text-slate-400"
                            >
                                <Plus size={16} />
                            </IconButton>
                        </Box>

                        {errors.travelers && (
                            <Typography
                                variant="caption"
                                className="mt-1 block"
                                sx={{ color: "#f87171" }}
                            >
                                {errors.travelers}
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* Preferences */}
                <Box>
                    <PreferenceSelector
                        travelPace={formData.travelPace}
                        budget={formData.budget}
                        walkingPreference={formData.walkingPreference}
                        onTravelPaceChange={(value) =>
                            updateField("travelPace", value)
                        }
                        onBudgetChange={(value) => updateField("budget", value)}
                        onWalkingPreferenceChange={(value) =>
                            updateField("walkingPreference", value)
                        }
                    />
                </Box>
            </Box>


            {/* Interests */}
            <InterestSelector
                value={formData.interests}
                onChange={(interests) => updateField("interests", interests)}
            />


            {/* AI Intent */}
            <Box>
                <Typography
                    variant="subtitle1"
                    className="!mb-2 !font-medium"
                    sx={{ color: "#f8fafc" }}
                >
                    Anything else Veyra should know?
                </Typography>

                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="I want a relaxed trip with lots of local food, scenic places, and no early mornings..."
                    value={formData.aiIntent}
                    onChange={(event) =>
                        updateField("aiIntent", event.target.value)
                    }
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#1b2635",
                            borderRadius: "12px",
                            color: "#f8fafc",
                            alignItems: "flex-start",

                            "& fieldset": {
                                borderColor: "rgba(127, 149, 170, 0.2)",
                            },

                            "&:hover fieldset": {
                                borderColor: "rgba(127, 149, 170, 0.4)",
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: "#94a3b8",
                            },
                        },

                        "& .MuiInputBase-input::placeholder": {
                            color: "#64748b",
                            opacity: 1,
                        },
                    }}
                />
            </Box>

            {/* Submit */}
            <Box className="pt-2">
                <Button
                    type="submit"
                    variant="contained"
                    disabled={!canGenerate || isGenerating}
                    endIcon={!isGenerating ? <ArrowRight size={18} /> : undefined}
                    className="!rounded-xl !px-5 !py-3 !normal-case"
                    sx={{
                        backgroundColor: "#f8fafc",
                        color: "#0f1720",
                        fontWeight: 600,

                        "&:hover": {
                            backgroundColor: "#e2e8f0",
                        },

                        "&.Mui-disabled": {
                            backgroundColor: "rgba(148, 163, 184, 0.12)",
                            color: "#475569",
                        },
                    }}
                >
                    {isGenerating ? "Creating your trip..." : "Generate itinerary"}
                </Button>

                <Typography
                    variant="body2"
                    className="mt-3"
                    sx={{ color: "#64748b" }}
                >
                    You can review and change everything later.
                </Typography>
            </Box>
        </Box>
    );
}
