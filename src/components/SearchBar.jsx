import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: 20, pl: 2, mr: { sm: 5 } }}
    >
      <input className="search-bar" placeholder="Search . . . " />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
