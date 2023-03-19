import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Box, Typography } from '@mui/material';
import Link from '@mui/material';
import axios from "axios";
import { useState } from "react";

  export default function AnswerBox() {
    const [writer, setWriter] = useState("EGOnize");
    const [answerContent, setAnswerContent] = useState("");
  
    const addAnswer = async () => {
      await axios.post(`http://localhost:8080/qna/detailqna/{questionNo}`, {
        writer: `${writer}`,
        answerContent: `${answerContent}`,
      });
    };
  
    const handleContent = (e) => {
      setAnswerContent(e.target.value);
      // console.log(e.target.value);
    };  

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
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.5rem"
          color="#FF6A00"
        >
          답변하기
        </Typography>
        <TextField fullWidth
          required
          id="content"
          name="content"
          label="질문에 대한 답변을 남겨주세요"
          multiline
          maxRows={20}
          rows={3}
          variant="outlined"
          onChange={handleContent}
        />
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Button
            style={{ color: "#424242", backgroundColor: "#f5f5f5" }}
            onClick={() => {
              addAnswer();
              window.history.back();
            }}
          >
            등록
          </Button>
        </Box>
      </Box>
    );
  }