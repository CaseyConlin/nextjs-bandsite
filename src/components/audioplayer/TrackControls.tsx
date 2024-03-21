import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

export type TrackControlsProps = {
  paused: boolean;
  playPauseHandler: () => void;
  prevTrackHandler: () => void;
  nextTrackHandler: () => void;
};

export const TrackControls = ({
  paused,
  playPauseHandler,
  prevTrackHandler,
  nextTrackHandler,
}: TrackControlsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: -1,
      }}
    >
      <IconButton aria-label="previous song" onClick={() => prevTrackHandler()}>
        <FastRewindRounded fontSize="large" sx={{ fill: "black" }} />
      </IconButton>
      <IconButton
        aria-label={paused ? "play" : "pause"}
        onClick={() => playPauseHandler()}
      >
        {paused ? (
          <PlayArrowRounded sx={{ fontSize: "3rem", fill: "black" }} />
        ) : (
          <PauseRounded sx={{ fontSize: "3rem", fill: "black" }} />
        )}
      </IconButton>
      <IconButton aria-label="next song" onClick={() => nextTrackHandler()}>
        <FastForwardRounded fontSize="large" sx={{ fill: "black" }} />
      </IconButton>
    </Box>
  );
};
