import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function Sort() {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel sx={{ fontFamily: "Prosto One" }}>Filter</InputLabel>
      <Select
        value={sort}
        label="Filter"
        onChange={handleChange}
        sx={{
          borderRadius: 5,
          width: "calc(15vw)",
          fontFamily: "Prosto One",
        }}
      >
        <MenuItem value="" fontFamily="Prosto One">
          <em>Filter</em>
        </MenuItem>
        <MenuItem value="unanswer" fontFamily="Prosto One">
          미해결
        </MenuItem>
        <MenuItem value="myqna" fontFamily="Prosto One">
          내 질문
        </MenuItem>
        <MenuItem value="myanswer" fontFamily="Prosto One">
          내가 답변한 질문
        </MenuItem>
      </Select>
    </FormControl>
  );
}
