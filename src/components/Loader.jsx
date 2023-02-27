import React from "react";
import { Box, Stack } from "@mui/material";
const Loader = () => {
  return (
    <Box minHeight="95vh">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <div class="custom-loader"></div>
      </Stack>
    </Box>
  );
};

export default Loader;
