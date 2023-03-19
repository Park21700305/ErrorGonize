import GoogleIcon from "@mui/icons-material/Google";
import GoogleButton from "../components/Login/GoogleButton";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

export default function EgoLogin() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", mt: "calc(20vh)" }}
    >
      <Box
        border="5px solid #f3f3f3"
        borderRadius={4}
        display="flex"
        flexDirection="column"
        width="calc(25vw)"
        p={3}
        alignItems="center"
      >
        <Box mb={1}>
          <GoogleIcon fontSize="large" />
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          mb={4}
          style={{ textDecoration: "none", color: "#2E3B55" }}
        >
          <Typography fontWeight={900}>ErrorGOnize&nbsp;</Typography>
          with Google
        </Box>
        <Box mb={2}>
          <GoogleButton />
        </Box>
      </Box>
    </Container>
  );
}
