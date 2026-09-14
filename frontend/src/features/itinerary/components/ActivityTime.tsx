import { Box, Typography } from "@mui/material";
import { Clock } from "lucide-react";

type ActivityTimeProps = {
  time: string;
};

export default function ActivityTime({ time }: ActivityTimeProps) {
  return (
    <Box className="flex w-16 shrink-0 items-start gap-2 pt-1 sm:w-20">
      <Clock size={15} className="mt-0.5 shrink-0" color="#64748b" />

      <Typography
        variant="body2"
        className="!font-medium"
        sx={{ color: "#94a3b8" }}
      >
        {time}
      </Typography>
    </Box>
  );
}