import { Box, Typography } from "@mui/material";

export default function QnaWrite() {
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
          fontWeight={800}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          🧐 Q&A는 어떻게? 🧐
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        개발하다가 모르거나
        <br />
        궁금한 것이 생겼을 때
        <br />
        질문을 올리시면 됩니다.
        <br />
        <br />
        질문에 대한 답을 아시면
        <br />
        답변을 달아주시면 됩니다.
        <br />
        <br />
        아래의 예시를 참고해서
        <br />
        Q&A를 작성해보세요!
      </Typography>
    </Box>
  );
}
