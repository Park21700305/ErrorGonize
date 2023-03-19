import dash1 from "../../images/dash1.png";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Typography } from "@mui/material";

export default function SecondBlock() {
  return (
    <Box display="flex">
      <Box
        p={6}
        borderRadius={4}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          bgcolor: "#f3f3f3",
          // width: "calc(45vw)",
        }}
      >
        <Box display="flex" gap={2} alignItems="flex-end">
          <UpdateIcon fontSize="large" />
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={400}
            fontSize="1.3rem"
            color="#818589"
          >
            업데이트되는 새로운 질문
          </Typography>
        </Box>
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="2rem"
          mt={7}
          lineHeight={2.5}
        >
          몰랐던 Error는 확인
          <br />
          내가 아는 Error는 답변
        </Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 10,
          borderRadius: 5,
        }}
      >
        <img
          className="dash1"
          src={dash1}
          alt="dash1"
          style={{
            width: "calc(20vw)",
            borderRadius: 30,
          }}
        />
      </Box>
    </Box>
  );
}
