import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AddNoteBtn() {
  return (
    <Link to="/qna/newqna" style={{ textDecoration: 'none' }}>
      <Button
      style={{
        backgroundColor: "#0B0988",
        fontWeight: 900,
        fontSize: "1rem",
        //width: "calc(18vw)",
      }}
      fullWidth
      variant="contained"
      sx={{ borderRadius: 5, fontFamily: "Prosto One", letterSpacing: 5 }}
      >
      + Question
      </Button>  
    </Link>
  );
}
