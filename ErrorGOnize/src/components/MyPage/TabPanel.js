import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Button } from '@mui/material';
import PfBtn from '../Dashboard/PfBtn';
import Cards from "./Cards";
import NoteCard from "../Note/NoteCard";

import { Link } from "react-router-dom";
import axios from "axios";


const QuestionBar = (mode) => {
  return (
    <Box
      sx={{
        p: "10px 10px",
        display: "flex",
        width: "calc(60vw)",
        border: "5px solid #f3f3f3",
        borderRadius: 4,
      }}
    >
      <PfBtn/>
      <Button
        variant="contained"
        sx={{
          margin: 0.8,
          ml: 4,  
          backgroundColor: "#f3f3f3",
          fontWeight: 900,
          fontSize: "1rem",
          width: "calc(50vw)",
          height: "calc(4vw)",
          borderRadius: 4, 
          fontFamily: "Prosto One", 
          letterSpacing: 2,
          color: "#d3d3d3",
          justifyContent: "left" 
        }}
    >
      나누고 싶은 { mode.value=='NOTE' ?  '생각이 있으신가요?' : '질문이 있으신가요?'}
    </Button>
    </Box>
  );
}

export default function TabPanel({ mode, toLink }) {  
  const [isNote, setIsNote] = useState( () => {
    console.log("mode:", mode);
    if(mode == 'NOTE')
      return true
    else  
      return false
  });
  const [notes, setNotes] = useState([]);
  const [qnas, setQnas] = useState([]);

  const getNotes = async () => {
    const note = await axios.get("http://localhost:8080/note");
    setNotes(note.data);
    console.log(note.data)
  };
  const getQna = async () => {
    const qna = await axios.get("http://localhost:8080/qna");
    setNotes(qna.data);
    console.log(qna.data)
  };

  useEffect(() => {
    getNotes();
    //getQna();
  }, []);

    return (
      <div>
        <Box >
          <Grid container spacing={20} alignSelf="center"> 
            <Grid item alignItems="center">
              <Link to={ toLink }  style={{ textDecoration: "none" }}>
                <QuestionBar value={mode}/>
              </Link>
              { (isNote)?
                  notes.map((note) => (
                    <Link
                      to={`/note/detail/${note.noteNo}`}
                      style={{ textDecoration: "none" }}
                    >
                      <NoteCard key={note.noteNo} note={note} alignItems="center" />
                    </Link>
                  ))
                :qnas.map((qna) => (
                  <Link
                    to={`/qna/detail/${qna.noteNo}`}
                    style={{ textDecoration: "none" }}
                  >
                    <NoteCard key={qna.qnaNo} qna={qna} alignItems="center" />
                  </Link>
                ))
              }
            </Grid>
          </Grid>
        </Box>
      </div>
    );
}
