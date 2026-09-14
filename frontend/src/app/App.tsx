import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

import AppShell from "./AppShell";
import { theme } from "./theme";
import "../App.css";

function App() {
    return (
        <BrowserRouter>
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: theme.colors.background,
                    color: theme.colors.text,
                }}
            >
                <AppShell />
            </Box>
        </BrowserRouter>
    );
}

export default App;