import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Common/Search";
import Popularqna from "../components/Common/Popularqna";
import AddQnaBtn from "../components/Qna/AddQnaBtn";
import QuestionCard from "../components/Qna/QuestionCard";
import Filter from "../components/Qna/Filter";
import Sort from "../components/Common/Sort";
import QnaWrite from "../components/Qna/QnaWrite";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Qna() {
  const [questions, setQuestion] = useState([]);    

  const getQuestion = async () => {
    const question = await axios.get("http://localhost:8080/qna");
    setQuestion(question.data);
    console.log(question.data);
  };

  useEffect(() => {
    getQuestion();
  }, [questions]);

  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(15vw)"
          minWidth="calc(15vw)"
        >
          <Search />
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" flexDirection="row" gap={3}>
            <Sort />
            <Filter />
          </Box>
          {questions.map((question) => (
            <Link
              to={`/qna/detailqna/${question.questionNo}`}
              style={{ textDecoration: "none" }}
            >
              <QuestionCard key={question.questionNo} question={question} />
            </Link>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(18vw)"
          minWidth="calc(18vw)"
        >
          <AddQnaBtn />
          <Popularqna />
          <QnaWrite />
        </Box>
      </Box>
    </Container>
  );
}
