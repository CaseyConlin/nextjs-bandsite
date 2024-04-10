// "use client";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { VideoPageHeader } from "@/components/VideoPageHeader";
import { VideoCardContainer } from "@/components/VideoCardContainer";

export type ChannelDataType = {
  profileTitle: string;
  profileImage: string;
};

export const metadata = {
  title: "Videos",
  description:
    "Welcome to our corner of the digital prairie. Americana and country music videos, where the heart speaks and the music never fades.",
};
const VideosPage = () => {
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

      <VideoPageHeader />

      <VideoCardContainer />
    </>
  );
};
export default VideosPage;
