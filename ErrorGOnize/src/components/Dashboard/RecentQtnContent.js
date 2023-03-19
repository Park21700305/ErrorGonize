import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function RecentQtnContent() {
  return (
    <Box display="flex" flexDirection="column" gap={3} alignItems="baseline">
      <Typography fontFamily={"Prosto One"} fontWeight={900} color="#222">
        React 페이지 이동 질문
      </Typography>
      <Typography fontFamily={"Prosto One"} fontWeight={400} color="#222">
        Link를 걸어둔 버튼을 클릭하면 url은 변경되는데, 페이지 이동이 안됩니다!
      </Typography>
      <Typography
        fontFamily={"Prosto One"}
        fontWeight={300}
        fontSize={13}
        color="#222"
      >
        조회수 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;답변 12
      </Typography>
    </Box>
  );
}
