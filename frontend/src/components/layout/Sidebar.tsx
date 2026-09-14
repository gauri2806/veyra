import { Box, Typography, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import {
    Tent,
    Plus,
    CircleUserRound,
    Map,
    Compass,
    Settings,
} from "lucide-react";
import { theme } from "../../app/theme";

const pages = [
    {
        id: "trips",
        title: "Trips",
        path: "/trips",
        icon: Map,
    },
    {
        id: "explore",
        title: "Explore",
        path: "/explore",
        icon: Compass,
    },
    {
        id: "settings",
        title: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const navigate = useNavigate();

    const user = {
        name: "Gauri Katti",
        email: "gaurikatti2806@gmail.com",
    };

    return (
        <Box
            className="w-60 h-full shrink-0 flex flex-col"
            sx={{
                borderRight: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface,
            }}
        >
            {/* Logo */}
            <Box className="px-6 pt-6 pb-8">
                <Typography
                    className="flex items-center gap-2 text-xl"
                    sx={{
                        color: theme.colors.text,
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                    }}
                >
                    <Tent
                        size={24}
                        strokeWidth={1.5}
                    />

                    Veyra
                </Typography>
            </Box>

            {/* New Trip */}
            <Box className="px-4">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/trips/new")}
                    startIcon={
                        <Plus
                            size={17}
                            strokeWidth={1.8}
                        />
                    }
                    sx={{
                        minHeight: 40,
                        backgroundColor: theme.colors.accent,
                        color: theme.colors.background,
                        textTransform: "none",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        borderRadius: "8px",
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

            {/* Navigation */}
            <Box className="px-3 mt-8">
                <Typography
                    sx={{
                        px: 2,
                        mb: 2,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: theme.colors.textMuted,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                    }}
                >
                    Workspace
                </Typography>

                <Box className="flex flex-col gap-1">
                    {pages.map((page) => {
                        const Icon = page.icon;

                        return (
                            <Box
                                key={page.id}
                                component={NavLink}
                                to={page.path}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                                sx={{
                                    textDecoration: "none",
                                    color: theme.colors.textMuted,
                                    fontSize: "0.875rem",
                                    transition: "all 150ms ease",

                                    "&:hover": {
                                        backgroundColor:
                                            theme.colors.elevated,
                                        color: theme.colors.textSecondary,
                                    },

                                    "&.active": {
                                        backgroundColor:
                                            theme.colors.elevated,
                                        color: theme.colors.text,
                                    },

                                    "&.active svg": {
                                        color: theme.colors.text,
                                    },
                                }}
                            >
                                <Icon
                                    size={17}
                                    strokeWidth={1.7}
                                />

                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                    }}
                                >
                                    {page.title}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* User */}
            <Box
                className="mt-auto px-4 py-4 flex items-center gap-3"
                sx={{
                    borderTop: `1px solid ${theme.colors.border}`,
                }}
            >
                <CircleUserRound
                    size={30}
                    strokeWidth={1.5}
                    color={theme.colors.textSecondary}
                />

                <Box className="min-w-0">
                    <Typography
                        noWrap
                        sx={{
                            color: theme.colors.text,
                            fontSize: "0.8rem",
                            fontWeight: 500,
                        }}
                    >
                        {user.name}
                    </Typography>

                    <Typography
                        noWrap
                        sx={{
                            color: theme.colors.textMuted,
                            fontSize: "0.7rem",
                        }}
                    >
                        {user.email}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}