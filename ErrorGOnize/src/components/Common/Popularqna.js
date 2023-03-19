import { Box, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Popularqna() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{
        borderRadius: 5,
      }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          인기 Q&A
        </Typography>
        <Box>
          <NavigateBeforeIcon sx={{ color: "#888" }} />
          <NavigateNextIcon sx={{ color: "#888" }} />
        </Box>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={500}>
        백업파일 실행 중 이런 에러가 뜨는데 어떻게 해결할 수 있을까요?
      </Typography>
      <Typography fontFamily={"Prosto One"} fontWeight={300}>
        조회수 59 답변 8
      </Typography>
    </Box>
  );
}
