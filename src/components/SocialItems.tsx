"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { YouTube } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";

export const SocialItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100vw",
      }}
    >
      <IconButton
        aria-label="youtube"
        component="a"
        target="_blank"
        href="https://www.youtube.com/channel/UCJzQ4krap2qE6JBMbS_IRmg"
      >
        <YouTube style={{ fontSize: "3rem", fill: "#27221d" }} />
      </IconButton>
      <IconButton
        aria-label="facebook"
        component="a"
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100069423533528"
      >
        <FacebookRounded style={{ fontSize: "3rem", fill: "#27221d" }} />
      </IconButton>
    </Box>
  );
};
