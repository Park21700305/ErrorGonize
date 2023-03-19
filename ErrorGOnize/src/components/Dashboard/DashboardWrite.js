import { Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import QuizIcon from "@mui/icons-material/Quiz";

export default function DashboardWrite() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{ borderRadius: 5 }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={800}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          🧐 대시보드는 어떻게? 🧐
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        <AutorenewIcon /> 대시보드에서는 가장 최근에
        <br />
        게시된 에러들을 볼 수 있고,
        <br />
        <br />
        <QuizIcon /> 상단의 질문 창을 통해
        <br />
        질문을 게시할 수 있습니다.
        <br />
        <br />
        <Typography fontWeight={900}>
          새로운 질문과 답변을 작성해보세요!
        </Typography>
      </Typography>
    </Box>
  );
}
