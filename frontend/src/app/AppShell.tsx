import { Box } from "@mui/material";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

export default function AppShell() {
    return (
        <Box className="w-full h-svh flex overflow-hidden">

            {/* Desktop Sidebar */}
            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },
                }}
            >
                <Sidebar />
            </Box>

            {/* Main */}
            <Box className="flex-1 min-w-0 flex flex-col">
                <Topbar />
                <PageContainer />
            </Box>

        </Box>
    );
}