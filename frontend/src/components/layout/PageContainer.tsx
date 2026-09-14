import { Box } from "@mui/material";
import { theme } from "../../app/theme";
import AppRoutes from "../../routes/AppRoutes";

export default function PageContainer() {
    return (
        <Box
            className="flex-1 overflow-y-auto p-4 md:p-6"
            sx={{
                backgroundColor: theme.colors.background,
            }}
        >
            <AppRoutes />
        </Box>
    );
}