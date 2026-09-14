import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowLeft, Map, Wallet, Sparkles } from "lucide-react";

type ItineraryHeaderProps = {
  onBack: () => void;
};

export default function ItineraryHeader({
  onBack,
}: ItineraryHeaderProps) {
  return (
    <Box
      className="flex flex-col gap-4 border-b px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
      sx={{
        borderColor: "rgba(127, 149, 170, 0.16)",
      }}
    >
      {/* Left: Back + Trip info */}
      <Box className="flex min-w-0 items-start gap-3">
        <IconButton
          onClick={onBack}
          aria-label="Go back"
          size="small"
          sx={{
            mt: 0.25,
            color: "#94a3b8",
            "&:hover": {
              backgroundColor: "rgba(148, 163, 184, 0.08)",
              color: "#f8fafc",
            },
          }}
        >
          <ArrowLeft size={19} />
        </IconButton>

        <Box className="min-w-0">
          <Typography
            variant="h6"
            className="truncate !text-base !font-semibold sm:!text-lg"
            sx={{ color: "#f8fafc" }}
          >
            Kyoto, Japan
          </Typography>

          <Typography
            variant="body2"
            className="mt-0.5"
            sx={{ color: "#64748b" }}
          >
            Oct 12 – Oct 18 · 2 travelers
          </Typography>
        </Box>
      </Box>

      {/* Right: Actions */}
      <Box className="flex items-center gap-2 pl-12 lg:pl-0">
        <Button
          type="button"
          startIcon={<Map size={16} />}
          className="!rounded-lg !px-3 !normal-case"
          sx={{
            color: "#94a3b8",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(148, 163, 184, 0.08)",
              color: "#f8fafc",
            },
          }}
        >
          Map
        </Button>

        <Button
          type="button"
          startIcon={<Wallet size={16} />}
          className="!rounded-lg !px-3 !normal-case"
          sx={{
            color: "#94a3b8",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(148, 163, 184, 0.08)",
              color: "#f8fafc",
            },
          }}
        >
          Budget
        </Button>

        <Button
          type="button"
          startIcon={<Sparkles size={16} />}
          className="!rounded-lg !px-3 !normal-case"
          sx={{
            color: "#dce6ee",
            backgroundColor: "rgba(148, 163, 184, 0.1)",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(148, 163, 184, 0.16)",
            },
          }}
        >
          Ask Veyra
        </Button>
      </Box>
    </Box>
  );
}