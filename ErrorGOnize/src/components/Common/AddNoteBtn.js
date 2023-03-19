import { Button } from "@mui/material";

export default function AddNoteBtn() {
  return (
    <Button
      style={{
        backgroundColor: "#0B0988",
        fontWeight: 900,
        fontSize: "1rem",
      }}
      fullWidth
      variant="contained"
      sx={{ borderRadius: 5, fontFamily: "Prosto One", letterSpacing: 5 }}
    >
      + Note
    </Button>
  );
}
