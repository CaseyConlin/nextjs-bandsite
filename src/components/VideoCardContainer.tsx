"use client";

import { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import { InteriorVideoCard } from "./InteriorVideoCard";

import { fetchVideosByChannelID } from "@/services/youtubeservice";

export const VideoCardContainer = () => {
  const [videoData, setVideoData] = useState<VideoPlayerProps[] | undefined>();

  useEffect(() => {
    fetchVideosByChannelID().then((res) => setVideoData(res));
  }, []);

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={3}
      maxWidth={"xl"}
      p={2}
      pl={-1}
      margin={"auto"}
      justifyContent="space-evenly"
      sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
    >
      {videoData &&
        videoData.map((video) => {
          return (
            <Grid
              xs={12}
              sm={5}
              md={4}
              alignSelf={"stretch"}
              key={video.title + video.source}
            >
              <InteriorVideoCard
                title={video.title}
                description={video.description}
                source={`https://www.youtube.com/embed/${video.source}`}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
