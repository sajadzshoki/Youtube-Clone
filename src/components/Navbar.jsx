import React from "react";

import { Stack, Typography } from "@mui/material";

import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        background: "#090909",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
      <Typography
        variant="h5"
        sx={{
          color: "white",
          display: { md: "block", xs: "none" },
          fontWeight: "bold",
        }}
      >
        Welcome to My <span style={{ color: "red" }}>Youtube </span>Clone
      </Typography>
    </Stack>
  );
};

export default Navbar;
