import { forwardRef } from "react";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import { track } from "./HomepageAudioPlayer";
import { roboto } from "../../app/fonts";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";

type TrackListProps = {
  track: track;
  trackPlaying: boolean;
  currentTrack: boolean;
  onclick: (track: number) => void;
};

export const TrackListItem = forwardRef(function TrackListItem(
  { track, trackPlaying, currentTrack, onclick }: TrackListProps,
  ref
) {
  return (
    <Grid2
      container
      columnSpacing={1}
      rowSpacing={3}
      justifyContent="space-around"
      alignItems="center"
      pr={3}
      onClick={() => onclick(track.trackNum)}
      sx={{
        cursor: "pointer",
      }}
      pt={1}
    >
      <Grid2 sm={1} display="flex" mt={0.25} justifyContent="center">
        {currentTrack && <Box ref={ref} />}
        {trackPlaying ? <VolumeUpRounded sx={{ fontSize: "1.25rem" }} /> : ""}
      </Grid2>
      <Grid2 sm={5}>
        <Typography fontSize=".875rem" className={roboto.className}>
          {track.songName}
        </Typography>
      </Grid2>
      <Grid2 sm={4} sx={{ textAlign: "center" }}>
        <Typography fontSize=".875rem" className={roboto.className}>
          {track.album}
        </Typography>
      </Grid2>
      <Grid2 sm={2} sx={{ textAlign: "right" }}>
        <Typography fontSize=".875rem" className={roboto.className}>
          {track.duration}
        </Typography>
      </Grid2>
    </Grid2>
  );
});
