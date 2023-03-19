import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [tag, setTag] = React.useState('');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tag}
          label="Tag"
          onChange={handleChange}
        >
          <MenuItem value={1}>#java</MenuItem>
          <MenuItem value={2}>#spring</MenuItem>
          <MenuItem value={3}>#flutter</MenuItem>
          <MenuItem value={4}>#python</MenuItem>
          <MenuItem value={5}>#javascript</MenuItem>
          <MenuItem value={6}>#android</MenuItem>
          <MenuItem value={7}>#ios</MenuItem>
          <MenuItem value={8}>#c++</MenuItem>
          <MenuItem value={9}>#linux</MenuItem>
          <MenuItem value={10}>#intellij</MenuItem>
        </Select>
      </FormControl>
  );
}