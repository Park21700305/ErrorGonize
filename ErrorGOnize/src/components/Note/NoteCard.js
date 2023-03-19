import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function NoteCard({ note }) {
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
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.2rem"
          color="#FF6A00"
        >
          {note.noteTitle}
        </Typography>
        <Box display="flex" gap={1}>
          <Typography
            fontFamily={"Prosto One"}
            fontSize="0.8rem"
            fontWeight={400}
            color="#222"
          >
            {note.writer}
          </Typography>
          <Typography
            fontFamily={"Prosto One"}
            fontSize="0.8rem"
            fontWeight={400}
            color="#222"
          >
            {note.regdate.split(["T"])[0]}
          </Typography>
        </Box>
      </Box>

      <Typography
        fontFamily={"Prosto One"}
        fontWeight={500}
        color="#222"
        overflow={"hidden"}
        textOverflow="clip"
      >
        {note.noteContent}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Button style={{ color: "#fff", backgroundColor: "#FFA500" }}>
          # {note.category}
        </Button>
        <Typography fontFamily={"Prosto One"} fontWeight={300} color="#222">
          조회수 {note.viewCnt} 좋아요 {note.likedCnt}
        </Typography>
      </Box>
    </Box>
  );
}
