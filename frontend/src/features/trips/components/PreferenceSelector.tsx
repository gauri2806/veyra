import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

type TravelPace = "Relaxed" | "Balanced" | "Packed" | "";
type Budget = "Budget" | "Moderate" | "Premium" | "";
type WalkingPreference =
  | "Minimal walking"
  | "Some walking"
  | "Walking is fine"
  | "";

type PreferenceSelectorProps = {
  travelPace: TravelPace;
  budget: Budget;
  walkingPreference: WalkingPreference;
  onTravelPaceChange: (value: TravelPace) => void;
  onBudgetChange: (value: Budget) => void;
  onWalkingPreferenceChange: (value: WalkingPreference) => void;
};

const selectorStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,

  "& .MuiToggleButton-root": {
    border: "1px solid rgba(127, 149, 170, 0.2)",
    borderRadius: "10px !important",
    color: "#94a3b8",
    textTransform: "none",
    padding: "8px 16px",

    "&:hover": {
      backgroundColor: "rgba(148, 163, 184, 0.08)",
    },

    "&.Mui-selected": {
      color: "#f8fafc",
      backgroundColor: "rgba(148, 163, 184, 0.16)",

      "&:hover": {
        backgroundColor: "rgba(148, 163, 184, 0.22)",
      },
    },
  },
};

export default function PreferenceSelector({
  travelPace,
  budget,
  walkingPreference,
  onTravelPaceChange,
  onBudgetChange,
  onWalkingPreferenceChange,
}: PreferenceSelectorProps) {
  return (
    <Box className="space-y-7">
      {/* Travel Pace */}
      <Box>
        <Typography
          variant="subtitle1"
          className="!mb-3 !font-medium"
          sx={{ color: "#f8fafc" }}
        >
          Travel pace
        </Typography>

        <ToggleButtonGroup
          exclusive
          value={travelPace}
          onChange={(_, value) => {
            if (value) {
              onTravelPaceChange(value);
            }
          }}
          sx={selectorStyles}
        >
          <ToggleButton value="Relaxed">Relaxed</ToggleButton>
          <ToggleButton value="Balanced">Balanced</ToggleButton>
          <ToggleButton value="Packed">Packed</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Budget */}
      <Box>
        <Typography
          variant="subtitle1"
          className="!mb-3 !font-medium"
          sx={{ color: "#f8fafc" }}
        >
          Budget
        </Typography>

        <ToggleButtonGroup
          exclusive
          value={budget}
          onChange={(_, value) => {
            if (value) {
              onBudgetChange(value);
            }
          }}
          sx={selectorStyles}
        >
          <ToggleButton value="Budget">Budget</ToggleButton>
          <ToggleButton value="Moderate">Moderate</ToggleButton>
          <ToggleButton value="Premium">Premium</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Walking Preference */}
      <Box>
        <Typography
          variant="subtitle1"
          className="!mb-3 !font-medium"
          sx={{ color: "#f8fafc" }}
        >
          Walking preference
        </Typography>

        <ToggleButtonGroup
          exclusive
          value={walkingPreference}
          onChange={(_, value) => {
            if (value) {
              onWalkingPreferenceChange(value);
            }
          }}
          sx={selectorStyles}
        >
          <ToggleButton value="Minimal walking">
            Minimal walking
          </ToggleButton>

          <ToggleButton value="Some walking">
            Some walking
          </ToggleButton>

          <ToggleButton value="Walking is fine">
            Walking is fine
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}