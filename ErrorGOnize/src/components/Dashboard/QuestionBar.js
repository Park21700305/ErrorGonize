import PfBtn from "./PfBtn";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function QuestionBar() {
  return (
    <Box
      sx={{
        display: "flex",
        p: "10px 10px",
        display: "flex",
        alignItems: "center",
        border: "5px solid #f3f3f3",
        borderRadius: 5
      }}
    >
      <PfBtn />
      <Link to={"/qna/newqna"} style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            margin: 0.8,
            ml: 4,
            width: "calc(35vw)",
            height: "calc(6vh)",
            backgroundColor: "#f3f3f3",
            fontWeight: 900,
            fontSize: "1rem",
            borderRadius: 4,
            fontFamily: "Prosto One",
            letterSpacing: 2,
            color: "#d3d3d3",
            justifyContent: "left"
          }}
        >
          나누고 싶은 질문이 있으신가요?
        </Button>
      </Link>
    </Box>
  );
}
