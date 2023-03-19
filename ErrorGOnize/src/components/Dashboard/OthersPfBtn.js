import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function OthersPfBtn() {
  return (
    <Button>
      <Box display="flex" flexDirection="raw" gap={2}>
        <AccountCircleIcon sx={{ fontSize: 50, color: "#f3f3f3" }} />
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1rem"
            color="#000000"
          >
            홍길동
          </Typography>
          <Box display="flex" flexDirection="raw" alignItems="baseline" gap={2}>
            <Typography
              fontFamily={"Prosto One"}
              fontSize="0.8rem"
              fontWeight={400}
            >
              Handong Global University
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              fontSize="0.8rem"
              fontWeight={400}
            >
              2023-01-09
            </Typography>
          </Box>
        </Box>
      </Box>
    </Button>
  );
}
