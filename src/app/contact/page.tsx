"use client";

import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import IconButton from "@mui/material/IconButton";

import { YouTube } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";

export default function Page() {
  return (
    <Container maxWidth="xl">
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
        Drop Me a Line
      </Typography>
      <Box
        component="div"
        sx={{
          m: { xs: 1, sm: 2 },
          p: 2,
          py: 3,
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,85%)",
          fontSize: "1rem",
        }}
      >
        <Typography variant="accent" component="h2" fontSize="1.125" pb={2}>
          Gigs, Reviews, Questions, etc...
        </Typography>
        <Typography component="p">
          If you want to book a show, request a CD, more info, or just reach
          out, contact me at{" "}
          <Typography fontWeight={500} component="span" my={2}>
            <Link href="mark@unclebuckle.com" style={{ fontWeight: "900" }}>
              mark@unclebuckle.com
            </Link>
            !
          </Typography>
        </Typography>
        <Typography
          variant="accent"
          component="h2"
          fontSize="1.125"
          pb={1}
          pt={5}
        >
          Social Media
        </Typography>
        <Typography component="p">
          Follow our channels below for the latest udpates.
        </Typography>
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
      </Box>
    </Container>
  );
}
