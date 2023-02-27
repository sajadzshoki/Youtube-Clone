import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoUrl } from "../utils/constants";
// import Loader from "./Loader";
const VideoCard = ({video: {id: { videoId },snippet,},}) => {
  if(!snippet?.thumbnails?.high?.url){
    return snippet?.thumbnails?.low?.url
  }
  return (
    <Card sx={{ width: {xs:"99vw",sm:"320px"}, boxShadow: "none", borderRadius: {xs:0,sm:3},background: "#151515"}} className="video-card">
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: "100%", height: {xs:"14rem",sm:"180px"},borderRadius: {xs:0,sm:3} }}
          className="video-image"
        />
      </Link>
      <CardContent sx={{ background: "#151515" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
