import { Box, Button, Typography } from "@mui/material";
import TripDetailsForm from "../components/TripDetailsForm";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewTripPage() {
    const navigate = useNavigate();
    return (
        <Box className="min-h-screen px-4 py-8 sm:px-6 sm:py-10">
            <Box className="mx-auto max-w-5xl">
                <Box className="mb-6">
                    <Button
                        startIcon={<ArrowLeft size={16} />}
                        onClick={() => navigate("/trips")}
                        className="!px-0 !normal-case"
                        sx={{
                            color: "#94a3b8",
                            "&:hover": {
                                backgroundColor: "transparent",
                                color: "#f8fafc",
                            },
                        }}
                    >
                        Back to trips
                    </Button>
                </Box>
                <Box className="mb-8 sm:mb-10">
                    <Typography
                        variant="h4"
                        component="h1"
                        className="!text-3xl !font-semibold !tracking-tight sm:!text-4xl"
                        sx={{ color: "#f8fafc" }}
                    >
                        Create a new trip
                    </Typography>

                    <Typography
                        variant="body1"
                        className="mt-2 max-w-xl"
                        sx={{
                            color: "#94a3b8",
                            lineHeight: 1.7,
                        }}
                    >
                        Tell Veyra a little about your journey. We'll use this to build
                        your starting itinerary.
                    </Typography>
                </Box>

                <TripDetailsForm />
            </Box>
        </Box>
    );
}