import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export default function QuestionCard({date, name, content, rec}) {
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
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
        >   
            <Grid item xs={4} alignItems="center">
                <Avatar
                alt="name"
                sx={{
                    bgcolor: "dodgerblue",
                    pt: "25%",
                    pb: "25%",
                }}
                ></Avatar>
            </Grid>
            <Typography
                fontFamily={"Prosto One"}
                fontWeight={900}
                fontSize="1.2rem"
                color="#212121"
                sx={{ pl: 3 }}
            >
            {name}
            </Typography>
        </Box>
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column" 
        >
            <Typography 
                fontFamily={"Prosto One"} fontWeight={500}
                sx={{ pb: 3 }}
            >
            {content}
            </Typography> 
            <Typography
                fontFamily={"Prosto One"}
                fontSize="0.8rem"
                fontWeight={400}
                sx={{ pb: 3 }}
            >
            {date}
            </Typography> 
            <Button 
                style={{ color: "#424242" ,backgroundColor: "#f5f5f5"}}
            >
            공감 : {rec}
            </Button>  
        </Box>
    </Box>
  );
}