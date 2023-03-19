import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const NoteCard = () => {
    return (
        <Box
          display={"flex"}
          flexDirection="column"
          p={3}
          gap={3}
          sx={{ borderRadius: 5, width: "calc(60vw)" }}
          border={"5px solid #f3f3f3"}
        >
          <Box display="flex" justifyContent="space-between" alignItems="baseline">
            <Typography
              fontFamily={"Prosto One"}
              fontWeight={900}
              fontSize="1.2rem"
              color="#FF6A00"
            >
              React - Typescript 정리
            </Typography>
            <Typography
              fontFamily={"Prosto One"}
              fontSize="0.8rem"
              fontWeight={400}
              color="#222"
            >
              2023-01-05
            </Typography>
          </Box>
    
          <Typography fontFamily={"Prosto One"} fontWeight={500} color="#222">
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </Typography>
          <Typography fontFamily={"Prosto One"} fontWeight={300} color="#222">
            조회수 59
          </Typography>
        </Box>
      );
}

const QuestionCard = () => {

}
export default function Cards({ mode }) {
  return (
    <Box>
        <Grid container spacing={10}> 
            <Grid item xs={6} alignItems="center">
                <NoteCard></NoteCard>
                <NoteCard></NoteCard>
                <NoteCard></NoteCard>
            </Grid>
        </Grid>
    </Box>
  );
}