import { Box, Typography } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import note1 from "../../images/note1.png";

export default function FourthBlock() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="flex-start"
        sx={{
          borderRadius: 5,
          width: "calc(45vw)",
          height: "calc(13vw)",
          bgcolor: "#f3f3f3",
          position: "relative",
          top: "calc(-65vh)",
          zIndex: "modal",
        }}
      >
        <Typography
          mt={1}
          ml={4}
          fontFamily={"Prosto One"}
          fontWeight={400}
          fontSize="1.4rem"
          color="#818589"
        >
          <NoteAltIcon fontSize="large" /> 나만의 노트 작성
        </Typography>
        <Typography
          mt={4}
          ml={4}
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.7rem"
        >
          해결된 에러를 기록하여
          <br />
          나만의 노트 만들기
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: "tooltip",
          top: "calc(-100vh)",
          left: "calc(15vw)",
          boxShadow: 10,
          borderRadius: 5,
        }}
      >
        <img
          className="note1"
          src={note1}
          alt="note1"
          style={{
            width: "calc(25vw)",
            borderRadius: 30,
          }}
        />
      </Box>
    </>
  );
}
