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
    <FormControl sx={{ minWidth: 100 }} size="small">
      <InputLabel sx={{ fontFamily: "Prosto One" }}>Sort by</InputLabel>
      <Select
        value={sort}
        label="Sort by"
        onChange={handleChange}
        sx={{
          borderRadius: 5,
          // width: "calc(15vw)",
          fontFamily: "Prosto One",
        }}
      >
        <MenuItem value="" fontFamily="Prosto One">
          <em>Sort by</em>
        </MenuItem>
        <MenuItem value="latest" fontFamily="Prosto One">
          최신순
        </MenuItem>
        <MenuItem value="oldest" fontFamily="Prosto One">
          오래된 순
        </MenuItem>
      </Select>
    </FormControl>
  );
}
