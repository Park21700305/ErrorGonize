import {
    Box,
    Button,
    Container,
    InputLabel,
    TextField,
    Link,
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import CateDropdown from "../components/Common/CateDropdown";
  
  export default function EditQuestion() {
    const { questionNO } = useParams();
    const [writer, setWriter] = useState("EGOnize");
    const [category, setCategory] = useState("");
    const [questionTitle, setTitle] = useState("");
    const [questionContent, setContent] = useState("");
  
    const getQuestion = async () => {
      const question = await axios.get(`http://localhost:8080/qna/${questionNO}`);
      setWriter(question.data.writer);
      setCategory(question.data.category);
      setTitle(question.data.questionTitle);
      setContent(question.data.questionContent);
    };
  
    useEffect(() => {
      getQuestion();
    }, []);
  
    const editQuestion = async () => {
      await axios.patch(`http://localhost:8080/qn
      a/newqna`, {
        questionNo: `${questionNO}`,
        category: `${category}`,
        questionTitle: `${questionTitle}`,
        questionContent: `${questionContent}`,
      });
    };
  
    const getCate = (cate) => {
      // console.log("cate", cate);
      setCategory(cate);
    };
  
    const handleTitle = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContent = (e) => {
      setContent(e.target.value);
      // console.log(e.target.value);
    };
  
    return (
      <Container
        maxWidth="md"
        //   sx={{ border: "5px solid #f3f3f3", borderRadius: 5, mt: 2 }}
      >
        <Box display="flex" justifyContent="space-between" sx={{ p: 3 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <CateDropdown getCate={getCate} cate={category} />
          </Box>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              color="warning"
              disableElevation
              onClick={() => {
                window.history.back();
              }}
            >
              취소
            </Button>
            <Button
              variant="contained"
              color="warning"
              disableElevation
              onClick={() => {
                editQuestion();
                window.history.back();
              }}
            >
              수정 완료
            </Button>
          </Box>
        </Box>
  
        <Box>
          <InputLabel sx={{ pl: 3.5 }}>질문 제목</InputLabel>
          <TextField
            fullWidth
            sx={{ p: 3, pt: 0.5 }}
            size="small"
            value={questionTitle}
            onChange={handleTitle}
          />
          <InputLabel sx={{ pl: 3.5 }}>질문 내용</InputLabel>
          <TextField
            fullWidth
            sx={{ p: 3, pt: 0.5 }}
            multiline
            rows={19}
            size="small"
            value={questionContent}
            onChange={handleContent}
          />
        </Box>
      </Container>
    );
  }
  