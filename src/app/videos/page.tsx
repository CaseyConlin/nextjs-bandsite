"use client";

import { usePathname } from "next/navigation";

import { VideoPageHeaderProps } from "@/components/VideoPageHeader";

import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { VideoPageHeader } from "@/components/VideoPageHeader";
import { InteriorVideoCard } from "@/components/InteriorVideoPlayer";
import {
  fetchVideosByChannelID,
  fetchVideoChannelInfo,
} from "@/services/youtubeservice";

const VideosPage = () => {
  const [videoData, setVideoData] = useState<VideoPlayerProps[] | undefined>();
  const [channelData, setChannelData] = useState<
    VideoPageHeaderProps | undefined
  >();

  useEffect(() => {
    fetchVideosByChannelID().then((res) => setVideoData(res));
    fetchVideoChannelInfo().then((res) => setChannelData(res));
  }, []);

  return (
    <>
      <Typography
        component="h1"
        variant="accent"
        color="white"
        pt={18}
        pl={2}
        fontSize="3rem"
      >
        Videos
      </Typography>
      {channelData && (
        <VideoPageHeader
          profileTitle={channelData?.profileTitle}
          profileImage={channelData?.profileImage}
        />
      )}
      <Grid
        container
        spacing={2}
        maxWidth={"xl"}
        p={2}
        pl={-1}
        margin={"auto"}
        justifyContent="space-evenly"
      >
        {videoData &&
          videoData.map((video) => {
            return (
              <Grid
                sm={4}
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
    </>
  );
};
export default VideosPage;
