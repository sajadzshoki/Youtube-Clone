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
        background: "#151515",
        justifyContent: "space-between",
        zIndex: 100
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row" alignItems="center">

      <SearchBar />
      <Typography
        variant="h5"
        sx={{
          color: "white",
          display: { md: "block", xs: "none" },
          fontWeight: "bold",
        }}
        >
        Welcome to <span style={{ color: "red" }}>Youtube </span>Clone
      </Typography>
        </Stack>
    </Stack>
  );
};

export default Navbar;
