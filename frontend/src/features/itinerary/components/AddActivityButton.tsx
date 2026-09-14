import { Button } from "@mui/material";
import { Plus } from "lucide-react";

type AddActivityButtonProps = {
  onClick: () => void;
};

export default function AddActivityButton({
  onClick,
}: AddActivityButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      startIcon={<Plus size={17} />}
      className="!mt-1 !rounded-xl !px-3 !normal-case"
      sx={{
        color: "#94a3b8",
        fontWeight: 500,

        "&:hover": {
          backgroundColor: "rgba(148, 163, 184, 0.08)",
          color: "#f8fafc",
        },
      }}
    >
      Add activity
    </Button>
  );
}