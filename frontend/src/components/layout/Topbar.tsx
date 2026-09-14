import {
    Box,
    IconButton,
    TextField,
    InputAdornment,
    Drawer,
} from "@mui/material";
import {
    Search,
    CircleUserRound,
    Menu,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { theme } from "../../app/theme";

export default function Topbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Box
                className="w-full h-16 shrink-0 flex items-center justify-between px-4 md:px-6"
                sx={{
                    borderBottom: `1px solid ${theme.colors.border}`,
                    backgroundColor: theme.colors.background,
                }}
            >
                {/* Mobile menu */}
                <IconButton
                    onClick={() => setMobileMenuOpen(true)}
                    sx={{
                        display: {
                            xs: "flex",
                            md: "none",
                        },
                        color: theme.colors.textSecondary,
                    }}
                >
                    <Menu size={21} strokeWidth={1.7} />
                </IconButton>

                {/* Search + user */}
                <Box className="flex items-center gap-2 ml-auto">

                    <TextField
                        placeholder="Search trips, destinations..."
                        size="small"
                        sx={{
                            width: {
                                xs: 180,
                                sm: 240,
                                md: 300,
                            },

                            "& .MuiOutlinedInput-root": {
                                color: theme.colors.text,
                                backgroundColor: theme.colors.surface,
                                borderRadius: "10px",

                                "& fieldset": {
                                    borderColor: theme.colors.border,
                                },

                                "&:hover fieldset": {
                                    borderColor: theme.colors.border,
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
                                    <InputAdornment position="start">
                                        <Search
                                            size={18}
                                            strokeWidth={1.7}
                                            color={theme.colors.textMuted}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <IconButton
                        sx={{
                            color: theme.colors.textSecondary,
                            "&:hover": {
                                backgroundColor: theme.colors.elevated,
                            },
                        }}
                    >
                        <CircleUserRound
                            size={22}
                            strokeWidth={1.5}
                        />
                    </IconButton>
                </Box>
            </Box>

            {/* Mobile Sidebar */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: theme.colors.surface,
                        borderRight: `1px solid ${theme.colors.border}`,
                    },
                }}
            >
                <Sidebar />
            </Drawer>
        </>
    );
}