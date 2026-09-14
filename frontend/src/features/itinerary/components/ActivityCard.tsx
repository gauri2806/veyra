import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Clock,
  MapPin,
  MoreHorizontal,
  Wallet,
} from "lucide-react";
import { useState } from "react";

import type { Activity } from "../types";

type ActivityCardProps = {
  activity: Activity;
  selected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
};

export default function ActivityCard({
  activity,
  selected,
  onSelect,
  onDelete,
  onDuplicate,
}: ActivityCardProps) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(menuAnchor);

  const costLabel =
    activity.estimatedCost === 0
      ? "Free"
      : `¥${activity.estimatedCost.toLocaleString()}`;

  const durationLabel =
    activity.duration >= 60
      ? `${activity.duration / 60}h`
      : `${activity.duration}m`;

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleDelete = () => {
    handleMenuClose();
    onDelete();
  };

  const handleDuplicate = () => {
    handleMenuClose();
    onDuplicate();
  };

  return (
    <Box
      onClick={onSelect}
      className="group cursor-pointer rounded-2xl border p-4 transition-all duration-150 sm:p-5"
      sx={{
        backgroundColor: selected ? "#1e293b" : "#1b2635",
        borderColor: selected
          ? "rgba(148, 163, 184, 0.45)"
          : "rgba(127, 149, 170, 0.16)",

        "&:hover": {
          borderColor: selected
            ? "rgba(148, 163, 184, 0.55)"
            : "rgba(127, 149, 170, 0.3)",
          backgroundColor: "#1e293b",
        },
      }}
    >
      <Box className="flex items-start justify-between gap-4">
        <Box className="min-w-0">
          <Typography
            variant="h6"
            className="!text-base !font-semibold sm:!text-lg"
            sx={{ color: "#f8fafc" }}
          >
            {activity.title}
          </Typography>

          <Box className="mt-2 flex items-center gap-1.5">
            <MapPin size={14} color="#64748b" />

            <Typography
              variant="body2"
              className="truncate"
              sx={{ color: "#94a3b8" }}
            >
              {activity.location}
            </Typography>
          </Box>
        </Box>

        <IconButton
          size="small"
          aria-label={`More options for ${activity.title}`}
          onClick={handleMenuOpen}
          className="!shrink-0 !text-slate-500"
          sx={{
            opacity: {
              xs: 1,
              sm: menuOpen ? 1 : 0,
            },

            ".group:hover &": {
              opacity: 1,
            },
          }}
        >
          <MoreHorizontal size={18} />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={menuOpen}
          onClose={handleMenuClose}
          onClick={(event) => event.stopPropagation()}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "#1b2635",
                border: "1px solid rgba(127, 149, 170, 0.2)",
                borderRadius: "10px",
                minWidth: 140,
              },
            },
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              color: "#cbd5e1",
              "&:hover": {
                backgroundColor: "rgba(148, 163, 184, 0.08)",
              },
            }}
          >
            Edit
          </MenuItem>

          <MenuItem
            onClick={handleDuplicate}
            sx={{
              color: "#cbd5e1",
              "&:hover": {
                backgroundColor: "rgba(148, 163, 184, 0.08)",
              },
            }}
          >
            Duplicate
          </MenuItem>

          <MenuItem
            onClick={handleDelete}
            sx={{
              color: "#f87171",
              "&:hover": {
                backgroundColor: "rgba(248, 113, 113, 0.08)",
              },
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </Box>

      <Typography
        variant="body2"
        className="mt-4 max-w-2xl"
        sx={{
          color: "#94a3b8",
          lineHeight: 1.65,
        }}
      >
        {activity.description}
      </Typography>

      <Box className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Box
          className="rounded-md px-2 py-1"
          sx={{
            backgroundColor: "rgba(148, 163, 184, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            className="!font-medium"
            sx={{ color: "#cbd5e1" }}
          >
            {activity.category}
          </Typography>
        </Box>

        <Box className="flex items-center gap-1.5">
          <Clock size={14} color="#64748b" />

          <Typography
            variant="caption"
            sx={{ color: "#94a3b8" }}
          >
            {durationLabel}
          </Typography>
        </Box>

        <Box className="flex items-center gap-1.5">
          <Wallet size={14} color="#64748b" />

          <Typography
            variant="caption"
            sx={{ color: "#94a3b8" }}
          >
            {costLabel}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}