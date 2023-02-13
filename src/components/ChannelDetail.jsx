import { Box } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard"
const ChannelDetail = () => {
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
              height: "200px",
          }}
          >
          <ChannelCard />

        </div>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
