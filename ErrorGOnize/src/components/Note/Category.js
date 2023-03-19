import * as React from "react";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function Category() {
  return (
    <Box
      border={"5px solid #f3f3f3"}
      sx={{
        maxWidth: "100%",
        borderRadius: 8,
        // backgroundColor: "#f3f3f3",
      }}
    >
      <MenuList>
        <MenuItem sx={{ m: 1 }}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # ALL
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Java
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Spring
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Flutter
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Python
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # JavaScript
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Android
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # IOS
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # C / C++
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # Linux
          </Typography>
        </MenuItem>
        <MenuItem sx={{ m: 1 }} fontFamily={"Prosto One"}>
          <Typography sx={{ fontWeight: 800, fontFamily: "Prosto One" }}>
            # IntelliJ
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
