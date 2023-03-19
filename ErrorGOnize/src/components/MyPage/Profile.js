import { useState, useEffect } from "react";
import { Box, Grid, Stack, Button, TextField, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chips from "./Chips";
import axios from "axios";

export default function Profile() {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const info = await axios.get(`http://localhost:8080/user/2`);
    setInfo(info.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const [edit, setEdit] = useState(false);
  const editChange = () => {
    setEdit(!edit);
    console.log(edit);
    if (edit){
        console.log("수정중입니다")
        axios({
            url: "http://localhost:8080/user",
            method: 'patch',
            data: info
        })
    }
  };
  const shareLink = () => {
    var link = document.location.href;
    if ( link != "" ){
        alert("링크가 클립보드에 복사되었습니다.")
        window.clipboardData.setData('Text',link);
    }
    console.log(link);
  }

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.id]: event.target.value });
  };

//   const loadChipData = () => {
//     var cnt = 0;
//     var start = true;
//     var chipList = info.tagP.split(',')
//     const chipObject = chipList.map((chip) => {
//         if(!start) cnt = cnt + 1;
//         start = false;
//         return { key: cnt, label: chip }
//     })
//     return chipObject;
// }

// const [ chipData, setChipData ] = useState(loadChipData())

// const handleDelete = (chipToDelete) => () => {
//     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
// };

/**
 * 
 * 
 */
  return (
    <Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} alignItems="center">
            <Avatar
              alt="name"
              sx={{
                bgcolor: "dodgerblue",
                width: "50%",
                pt: "25%",
                pb: "25%",
              }}
            ></Avatar>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={9}>
                {edit ? (
                  <TextField
                    sx={{ m: 1 }}
                    label="name"
                    id="name"
                    defaultValue={info.name}
                    size="normal"
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{info.name}</h3>
                )}
              </Grid>
              <Grid item xs={3}>
                <Stack direction="row" alignItems="right" spacing={0.5}>
                  <Button variant="outlined" size="small" onClick={shareLink}>
                    공유
                  </Button>
                  {edit ? (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={editChange}
                    >
                      저장
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={editChange}
                    >
                      편집
                    </Button>
                  )}
                </Stack>
              </Grid>
              {edit ? (
                <TextField
                  sx={{ m: 1, width: "100%" }}
                  label="소개"
                  id="intro"
                  defaultValue={info.intro}
                  size="normal"
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
              ) : (
                <p>{info.intro}</p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} alignItems="center">
            <h3> Profile </h3>
            <Chip label={info.tagP}></Chip>
            {/* {chipData.map((data) => {
                    if (edit)
                        return (
                            <Chip 
                                key={data.key}
                                sx={{margin:0.4}}
                                label={data.label}
                                onDelete={handleDelete(data)} 
                            />
                        );
                    else
                        return(
                            <Chip 
                            key={data.key}
                            sx={{margin:0.4}}
                            label={data.label}
                            />
                        );    
                })} */}
            {/* <Chips mode="Profile" tags={info.tagP} edit={edit} /> */}
          </Grid>
          <Grid item xs={6}>
            <h3> Interest </h3>
            <Chip label={info.tagI}></Chip>
            {/* <Chips mode="Interests" tags={info.tagI} edit={edit} /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

/*
if (!edit)
        return (
            <Box >
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={4} alignItems="center">
                        <Avatar
                        alt="name"
                        sx={{
                            bgcolor: "dodgerblue",
                            width: "50%",
                            pt: "25%",
                            pb: "25%",
                        }}
                        ></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={9}><h3>{personalInfo.name}</h3></Grid>
                        <Grid item xs={3}>
                            <Stack direction="row" alignItems="right" spacing={0.5}>
                            <Button variant="outlined" size="small">공유</Button>
                            <Button variant="outlined" size="small" onClick={editChange}>편집</Button>
                            </Stack>
                        </Grid>
                        <p>{ personalInfo.intro }</p>
                        <p>🌐 website: { personalInfo.web }</p>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                <Grid container spacing={5}>
                <Grid item xs={6} alignItems="center">
                    <Chips mode="Profile" data={personalInfo.tagP} edit={edit}/>
                </Grid>
                <Grid item xs={6}>
                    <Chips mode="Interests" data={personalInfo.tagI} />
                </Grid>
                </Grid>
            </Box>
          </Box>
        );
    else
    return (
        <Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={4} alignItems="center">
                        <Avatar
                        alt="name"
                        sx={{
                            bgcolor: "dodgerblue",
                            width: "50%",
                            pt: "25%",
                            pb: "25%",
                        }}
                        ></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={9}><h3>{personalInfo.name}</h3></Grid>
                        <Grid item xs={3}>
                            <Stack direction="row" alignItems="right" spacing={0.5}>
                            <Button variant="outlined" size="small">공유</Button>
                            <Button variant="outlined" size="small" onClick={editChange}>저장</Button>
                            </Stack>
                        </Grid>
                        <p>{ personalInfo.intro }</p>
                        <p>🌐 website: { personalInfo.web }</p>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                <Grid container spacing={5}>
                <Grid item xs={6} alignItems="center">
                    <Chips mode="Profile" data={personalInfo.tagP} edit={edit}/>
                </Grid>
                <Grid item xs={6}>
                    <Chips mode="Interests" data={personalInfo.tagI} edit={edit} />
                </Grid>
                </Grid>
            </Box>
          </Box>
    );
*/

/** website
 * { edit ? 
                            (<TextField
                                sx={{ m: 1, width: '100%' }}
                                label="website"
                                id="edit-web"
                                defaultValue={personalInfo.intro}
                                size="normal"
                              />):
                            (<p>🌐 website: { personalInfo.intro }</p>)
                    }
 */
