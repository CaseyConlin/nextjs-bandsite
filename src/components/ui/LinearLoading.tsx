import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const LinearLoading = () => {
  return (
    <Box
      sx={{ disply: "flex", justifyContent: "stretch", pt: 5, width: "100%" }}
    >
      <LinearProgress
        sx={{
          backgroundColor: "white",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "rgb(39, 34, 29)",
            borderRadius: "25px",
          },
          borderRadius: "25px",
          color: "black",
          height: "10px",
        }}
      />
    </Box>
  );
};
