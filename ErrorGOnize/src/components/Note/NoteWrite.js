import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NoteWrite() {
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
          🧐 노트는 어떻게? 🧐
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={400}>
        개발하다가 발생한 에러를
        <br />
        정리한 노트를 올리시거나,
        <br />
        <br />
        개발에 관련된 Tip을
        <br />
        공유해주시면 됩니다.
        <br />
        <br />
        아래의 예시를 참고해서
        <br />
        노트를 작성해보세요!
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ fontSize: "1.4rem" }}>📓</Typography>
        <a
          target="_blank"
          href="https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F"
        >
          <Typography>예시 1</Typography>
        </a>
      </Box>
      {/* <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ fontSize: "1.4rem" }}>📓</Typography>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-google-login"
        >
          <Typography>예시 2</Typography>
        </a>
      </Box> */}
    </Box>
  );
}
