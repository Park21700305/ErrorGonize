import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  ["Q & A", "/qna"],
  ["Note", "/note"],
  ["My Page", "/mypage"],
];

function Header() {
  return (
    <Container>
      <AppBar
        position="fixed"
        top="-32px"
        style={{ background: "#fff" }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 900,
              fontFamily: "Prosto One",
            }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "#2E3B55" }}
            >
              ErrorGOnize
            </Link>
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mr: 1 }}>
            {pages.map((page) => (
              <Link to={page[1]} style={{ textDecoration: "none" }}>
                <Button
                  key={page[0]}
                  sx={{
                    color: "#A6A0B5",
                    fontFamily: "Prosto One",
                    fontWeight: 600,
                  }}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
            {/* <NotificationsIcon sx={{ color: "#A6A0B5", ml: 1, mr: 1 }} /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
