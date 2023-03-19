import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function QuestionCard({ question }) {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{ borderRadius: 5 }}
      border={"5px solid #f3f3f3"}
    >
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Link to="/qna/detailqna" style={{ textDecoration: "none" }}>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.2rem"
            color="#FF6A00"
          >
            {question.questionTitle}
          </Typography>
        </Link>
        <Typography
          fontFamily={"Prosto One"}
          fontSize="0.8rem"
          fontWeight={400}
        >
          {/* {question.regdate.split(["T"])[0]} */}
        </Typography>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={500}>
        {question.questionContent}
      </Typography>
      <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
        <Button style={{ color: "#424242", backgroundColor: "#f5f5f5" }}>
          {question.category}
        </Button>
      </Box>
      <Typography fontFamily={"Prosto One"} fontWeight={300}>
        답변 {question.answered} 조회수 {question.viewCnt} 궁금해요{" "}
        {question.curious}
      </Typography>
    </Box>
  );
}
