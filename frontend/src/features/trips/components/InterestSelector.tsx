import { Box, Chip, Typography } from "@mui/material";

type InterestSelectorProps = {
  value: string[];
  onChange: (interests: string[]) => void;
};

const interests = [
  "Food",
  "Culture",
  "Nature",
  "Adventure",
  "History",
  "Shopping",
  "Nightlife",
  "Art",
  "Wellness",
  "Photography",
];

export default function InterestSelector({
  value,
  onChange,
}: InterestSelectorProps) {
  const toggleInterest = (interest: string) => {
    if (value.includes(interest)) {
      onChange(value.filter((item) => item !== interest));
    } else {
      onChange([...value, interest]);
    }
  };

  return (
    <Box>
      <Typography
        variant="subtitle1"
        className="!mb-3 !font-medium"
        sx={{ color: "#f8fafc" }}
      >
        What are you into?
      </Typography>

      <Box className="flex flex-wrap gap-2">
        {interests.map((interest) => {
          const isSelected = value.includes(interest);

          return (
            <Chip
              key={interest}
              label={interest}
              clickable
              onClick={() => toggleInterest(interest)}
              variant={isSelected ? "filled" : "outlined"}
              sx={{
                borderRadius: "10px",
                color: isSelected ? "#f8fafc" : "#94a3b8",
                backgroundColor: isSelected
                  ? "rgba(148, 163, 184, 0.16)"
                  : "transparent",
                borderColor: "rgba(127, 149, 170, 0.2)",
                transition: "all 150ms ease",

                "&:hover": {
                  backgroundColor: isSelected
                    ? "rgba(148, 163, 184, 0.22)"
                    : "rgba(148, 163, 184, 0.08)",
                  borderColor: "rgba(127, 149, 170, 0.4)",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}