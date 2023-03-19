import { Box, Container } from "@mui/material";
import GoogleButton from "../components/Login/GoogleButton";
import FirstBlock from "../components/Before/FirstBlock";
import Image from "../images/Frame1.jpg";

export default function Before() {
  return (
    <Container sx={{ pt: 3, mb: 10 }}>
      <Box
        display={"flex"}
        alignItems="center"
        flexDirection="column"
        p={3}
        gap={10}
      >
        <FirstBlock />
        <img
          src={Image}
          style={{
            width: "calc(45vw)",
            borderRadius: 30,
          }}
        />

        <GoogleButton />
      </Box>
    </Container>
  );
}
