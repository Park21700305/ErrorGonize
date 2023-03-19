import { Box, Button, Container, Typography} from "@mui/material"
import Category from "../components/Note/Category";
import Popularqna from "../components/Common/Popularqna";
import QnaWrite from "../components/Qna/QnaWrite";
import Answer from "../components/Qna/Answer";
import AnswerBox from "../components/Qna/AnswerBox";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useParams } from "react-router-dom";

export default function DetailQna() {

  const { questionNo } = useParams();
  const [question, setQuestion] = useState([]);
  const [date, setDate] = useState("");

  const getQuestion = async () => {
    const info = await axios.get('http://localhost:8080/qna/${questionNo}');
    setQuestion(info.data);
    setDate(info.data.regdate.split("T")[0]);
    console.log(info.data);
  };

  const deleteQuestion = async (questionNo) => {
    await axios.delete(`http://localhost:8080/qna/${questionNo}`);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <Container sx={{ pt: 3, mb: 3, display: "flex", gap: 6 }}>
    <Box display="flex" flexDirection="column" gap={3} minWidth="calc(15vw)">
      <Category />
    </Box>
    <Box display="flex" flexDirection="column" gap={3} minWidth="calc(40vw)">
      <Box
        display={"flex"}
        flexDirection="column"
        p={3}
        sx={{
          borderRadius: 5,
          // width: "calc(38vw)"
        }}
        border={"5px solid #f3f3f3"}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box display="flex" gap={2} alignItems="center">
            <Button
              onClick={() => {
                window.history.back();
              }}
            >
              <NavigateBeforeIcon sx={{ color: "#888" }} />
            </Button>
            <Typography
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="1.2rem"
              color="#FF6A00"
              pt={0.5}
            >
              {question.questionTitle}
            </Typography>
          </Box>
          <Box display="flex" gap={1}>
            <Typography
              fontFamily={"Prosto One"}
              fontSize="0.8rem"
              fontWeight={400}
              color="#222"
            >
              {question.writer}
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              fontSize="0.8rem"
              fontWeight={400}
              color="#222"
            >
              {date}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          gap={1}
          justifyContent="flex-end"
          mt={1}
          alignItems="base-line"
        >
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#FFA500",
              height: 20,
            }}
          >
            # {question.category}
          </Button>
          <Typography
            fontFamily={"Prosto One"}
            color="#222"
            fontSize="0.8rem"
          >
            조회수 {question.viewCnt}
          </Typography>
          <Typography
            fontFamily={"Prosto One"}
            color="#222"
            fontSize="0.8rem"
          >
            궁금해요 {question.curious}
          </Typography>
        </Box>
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={500}
          color="#222"
          mt={3}
        >
          <ReactMarkdown children={question.questionContent} />
        </Typography>
          <Box display={"flex"} justifyContent="space-around">
            <Link
              to={`/qna/edit/${question.questionNo}`}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ mt: 3 }} color="info">
                수정
              </Button>
            </Link>
            <Button
              sx={{ mt: 3 }}
              color="warning"
              onClick={() => {
                deleteQuestion(question.questionNo);
                window.history.back();
                // window.reload();
              }}
            >
              삭제
            </Button>
          </Box>
          <AnswerBox/>
          <Answer/>
      </Box>
    </Box>
    <Box display="flex" flexDirection="column" gap={3} minWidth="calc(15vw)">
      <Popularqna />
      <QnaWrite />
    </Box>
  </Container>
  );
}