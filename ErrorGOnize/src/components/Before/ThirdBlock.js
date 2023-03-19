import CategoryIcon from "@mui/icons-material/Category";
import { Box, Typography } from "@mui/material";
import qna from "../../images/qna.png";

export default function ThirdBlock() {
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
          top: "calc(-26vh)",
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
          <CategoryIcon fontSize="large" /> 카테고리로 분류된 에러
        </Typography>
        <Typography
          mt={4}
          ml={4}
          fontFamily={"Prosto One"}
          fontWeight={900}
          fontSize="1.7rem"
        >
          쉽고 빠른 에러 검색
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: "tooltip",
          top: "calc(-70vh)",
          left: "calc(15vw)",
          boxShadow: 10,
          borderRadius: 5,
        }}
      >
        <img
          className="qna"
          src={qna}
          alt="qna"
          style={{
            width: "calc(25vw)",
            borderRadius: 30,
          }}
        />
      </Box>
    </>
  );
}
