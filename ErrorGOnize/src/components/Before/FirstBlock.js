import { Box, Typography } from "@mui/material";
import img from "../../images/vision.jpeg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FirstBlock() {
  return (
    <>
      <Box
        class="img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          width: "calc(45vw)",
          borderRadius: 20,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 20,
          }}
        >
          <Typography
            p={5}
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="2.3rem"
            color="white"
          >
            ErrorGOnize
          </Typography>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="3rem"
            color="yellow"
          >
            Error, 복잡한 검색은 X
          </Typography>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="3rem"
            color="#F2F2F2"
          >
            쉽게 찾고 해결하기
          </Typography>
          <KeyboardArrowDownIcon
            sx={{ fontSize: 50, color: "#C6C5C5", mt: 3, mb: 2 }}
          />
        </Box>
      </Box>
    </>
  );
}
