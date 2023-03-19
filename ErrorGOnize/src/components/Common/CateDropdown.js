import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function CateDropdown({ getCate, cate }) {
  const [category, setCategory] = useState(cate);

  const handleChange = (e) => {
    setCategory(e.target.value);
    getCate(e.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
      <InputLabel sx={{ fontFamily: "Prosto One" }}>카테고리</InputLabel>
      <Select
        value={category}
        label="카테고리"
        onChange={handleChange}
        sx={{
          borderRadius: 5,
          // width: "calc(15vw)",
          fontFamily: "Prosto One",
        }}
      >
        <MenuItem value="" fontFamily="Prosto One">
          <em>카테고리</em>
        </MenuItem>
        <MenuItem value={"java"}>#java</MenuItem>
        <MenuItem value={"spring"}>#spring</MenuItem>
        <MenuItem value={"flutter"}>#flutter</MenuItem>
        <MenuItem value={"python"}>#python</MenuItem>
        <MenuItem value={"javascript"}>#javascript</MenuItem>
        <MenuItem value={"android"}>#android</MenuItem>
        <MenuItem value={"ios"}>#ios</MenuItem>
        <MenuItem value={"c++"}>#c++</MenuItem>
        <MenuItem value={"linux"}>#linux</MenuItem>
        <MenuItem value={"intelliJ"}>#intellij</MenuItem>
      </Select>
    </FormControl>
  );
}
