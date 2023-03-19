import { Box, Container } from "@mui/material";
import Category from "../components/Note/Category";
import Search from "../components/Common/Search";
import Popularqna from "../components/Common/Popularqna";
import AddNoteBtn from "../components/Common/AddNoteBtn";
import NoteCard from "../components/Note/NoteCard";
import Sort from "../components/Common/Sort";
import NoteWrite from "../components/Note/NoteWrite";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Note() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const note = await axios.get("http://localhost:8080/note");
    setNotes(note.data);
  };

  useEffect(() => {
    getNotes();
  }, [notes]);

  return (
    <Container sx={{ pt: 3, mb: 3 }}>
      <Box display="flex" gap={6} alignItems="flex-start">
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(15vw)"
          // minWidth="calc(15vw)"
          position="sticky"
          top="calc(11vh)"
        >
          <Search />
          <Category />
        </Box>
        <Box display="flex" flexDirection="column" gap={3} width="calc(40vw)">
          {/* <Sort /> */}
          {notes.map((note) => (
            <Link
              to={`/note/detail/${note.noteNo}`}
              style={{ textDecoration: "none" }}
            >
              <NoteCard key={note.noteNo} note={note} />
            </Link>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width="calc(18vw)"
          // minWidth="calc(15vw)"
          position="sticky"
          left="calc(72vw)"
          top="calc(11vh)"
        >
          <Link to="/note/newnote" style={{ textDecoration: "none" }}>
            <AddNoteBtn />
          </Link>
          <Popularqna />
          <NoteWrite />
        </Box>
      </Box>
    </Container>
  );
}
