"use client";

import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { VideoPageHeader } from "@/components/VideoPageHeader";
import { InteriorVideoCard } from "@/components/InteriorVideoCard";
import {
  fetchVideosByChannelID,
  fetchVideoChannelInfo,
} from "@/services/youtubeservice";

export type ChannelDataType = {
  profileTitle: string;
  profileImage: string;
};
const VideosPage = () => {
  const [videoData, setVideoData] = useState<VideoPlayerProps[] | undefined>();
  const [channelData, setChannelData] = useState<ChannelDataType | undefined>();

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
        sx={{
          textShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Videos
      </Typography>
      {channelData && (
        <VideoPageHeader
          profileTitle={channelData?.profileTitle}
          profileImage={channelData?.profileImage}
          text={
            "Step into a virtual barnyard of musical bliss, where the sun-kissed fields echo with the heartfelt tunes of acoustic guitars and electric bass. On our channel, you'll find a cozy collection of live performances and music videos, each one a journey through the rolling hills of Americana soundscapes. Sway to the rhythm of our down-home ballads and foot-stomping anthems, as we whisk you away to a simpler time where the whiskey flows and the stories run deep. From intimate live sessions beneath the starlit sky to captivating music videos set against breathtaking landscapes, every note is a testament to the authenticity of our craft. So grab your favorite pair of boots, kick back, and let the twang of our strings and the warmth of our voices envelop you in the comforting embrace of country music's timeless embrace."
          }
          cta={
            "Welcome to our corner of the digital prairie, where the heart speaks and the music never fades."
          }
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
    </>
  );
};
export default VideosPage;
