
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import Loader from "./Loader";


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState('');
  const { id } = useParams();
  
  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  if (!channelDetail?.snippet) return <Loader/>
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            height: "200px",
          }}
        />
        <ChannelCard marginTop="-130px" channelDetail={channelDetail} />
      </Box>
      <Box sx={{maxWidth:"70%",margin:"auto"}}>
        <Videos videos={videos}/>
      </Box>
  
    </Box>
  );
};

export default ChannelDetail;
