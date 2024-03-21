import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

export type VolumeControlProps = {
  volumeValue: number;
  volumeHandler: (event: Event, newValue: number | number[]) => void;
};

export const VolumeControl = ({
  volumeValue,
  volumeHandler,
}: VolumeControlProps) => {
  return (
    <Stack
      alignSelf="center"
      spacing={2}
      direction="row"
      sx={{
        display: { xs: "none", sm: "flex" },
        mb: 1,
        px: 1,
        maxWidth: 350,
        width: "100%",
      }}
      alignItems="center"
    >
      <VolumeDownRounded />
      <Slider
        aria-label="Volume"
        onChange={(_, newValue) => volumeHandler(_, newValue)}
        defaultValue={30}
        value={volumeValue}
        sx={{
          color: "rgba(0,0,0,0.87)",
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            width: 24,
            height: 24,
            backgroundColor: "#fff",
            "&::before": {
              boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "none",
            },
          },
        }}
      />
      <VolumeUpRounded />
    </Stack>
  );
};
