"use client";

import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

import { fetchVideoChannelInfo } from "@/services/youtubeservice";

import { LinkButton } from "./ui/LinkButton";

export type ChannelDataType = {
  profileTitle: string;
  profileImage: string;
};

export const VideoPageHeader = () => {
  const [channelData, setChannelData] = useState<ChannelDataType | undefined>();

  useEffect(() => {
    fetchVideoChannelInfo().then((res) => setChannelData(res));
  }, []);
  return (
    <>
      <Card
        sx={{
          m: { xs: 1, sm: 2 },
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,85%)",
        }}
      >
        <Grid
          container
          flexDirection="row"
          sx={{ justifyContent: { xs: "center" } }}
        >
          <Grid
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              height="200px"
              src={channelData?.profileImage}
              alt={channelData?.profileTitle}
              sx={{ borderRadius: "50%", width: 200, my: { xs: 2, md: 0 } }}
            />
          </Grid>
          <Grid md={8}>
            <CardContent sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="accent" component="h2">
                {channelData?.profileTitle}
              </Typography>
              <Box py={2}>
                <Typography
                  fontSize="1rem"
                  variant="body2"
                  color="text.secondary"
                  pb={1.5}
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  Step into a virtual barnyard of musical bliss, where the
                  sun-kissed fields echo with the heartfelt tunes of acoustic
                  guitars and electric bass. On our channel, you&apos;ll find a
                  cozy collection of live performances and music videos, each
                  one a journey through the rolling hills of Americana
                  soundscapes. Sway to the rhythm of our down-home ballads and
                  foot-stomping anthems, as we whisk you away to a simpler time
                  where the whiskey flows and the stories run deep. From
                  intimate live sessions beneath the starlit sky to captivating
                  music videos set against breathtaking landscapes, every note
                  is a testament to the authenticity of our craft. So grab your
                  favorite pair of boots, kick back, and let the twang of our
                  strings and the warmth of our voices envelop you in the
                  comforting embrace of country music&apos;s timeless embrace.
                </Typography>
                <Typography
                  fontSize="1rem"
                  variant="body2"
                  color="text.secondary"
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  Welcome to our corner of the digital prairie, where the heart
                  speaks and the music never fades.
                </Typography>
              </Box>
              <LinkButton
                text="Subscribe"
                link={"https://www.youtube.com/@Mark-ew7id"}
                newWindow
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
