import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const TinyText = styled(Typography)({
  fontSize: "0.95rem",
  marginTop: "10px",
  marginLeft: "10px",
  marginRight: "10px",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "black",
});

export type TimeControlProps = {
  position: number;
  duration: number;
  scrubTimeHandler: (event: Event, newValue: number | number[]) => void;
  formatDuration: (value: number) => string;
};
export const TimeControl = ({
  position,
  duration,
  scrubTimeHandler,
  formatDuration,
}: TimeControlProps) => {
  return (
    <>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => scrubTimeHandler(_, value as number)}
        sx={{
          color: "rgba(0,0,0,0.87)",
          height: 4,

          "& .MuiSlider-thumb": {
            pointerEvents: "none",

            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&::before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>-{formatDuration(duration - position)}</TinyText>
      </Box>
    </>
  );
};
