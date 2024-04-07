"use client";
import bg from "../../public/bulldozerseaguls.webp";
import { Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { YouTube } from "@mui/icons-material";
import { FacebookOutlined } from "@mui/icons-material";

import { blackHanSans } from "@/app/fonts";

const pagesLeft = [
  { name: "Albums", link: "albums" },
  { name: "Videos", link: "videos" },
  { name: "Gigs", link: "gigs" },
];
const pagesRight = [
  { name: "Reviews", link: "reviews" },
  { name: "Bio", link: "bio" },
  { name: "Contact", link: "contact" },
];
export const Footer = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg.src})`,
        height: 450,
        // width: "100vw",

        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center ",
        // filter: "brightness(20%)",
      }}
    >
      <Grid
        container
        mt={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100vw",
        }}
      >
        <Toolbar disableGutters sx={{ display: "flex" }}>
          <Grid
            container
            sx={{
              justifyContent: "space-evenly",
              width: "85vw",
              alignContent: "flex-end",
            }}
          >
            <Grid
              py={0}
              my={0}
              xs={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagesLeft.map((page) => (
                <Typography
                  variant="accent"
                  key={page.name}
                  className={blackHanSans.className}
                  sx={{
                    my: 2,
                    mx: 2,
                    fontSize: "1.125rem",
                    textTransform: "capitalize",
                    color: "#E2B164",

                    display: "block",
                    // fontFamily: "Black Han Sans",
                  }}
                >
                  <Link href={`/${page.link}`}>{page.name}</Link>
                </Typography>
              ))}
            </Grid>
            <Grid
              xs="auto"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="accent"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: "flex",
                  fontSize: { xs: "2rem", md: "2.5rem", xl: "3.5rem" },
                  textAlign: "center",

                  //   letterSpacing: ".3rem",
                  color: "#E2B164",
                  textShadow:
                    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  textDecoration: "none",
                  //   fontFamily: "Black Han Sans",
                }}
              >
                Mark Brown
              </Typography>
            </Grid>
            <Grid
              xs={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagesRight.map((page) => (
                <Typography
                  key={page.name}
                  variant="accent"
                  className={blackHanSans.className}
                  sx={{
                    fontSize: "1.125rem",
                    textTransform: "capitalize",
                    my: 2,
                    mx: 2,
                    color: "#E2B164",

                    display: "block",
                    // fontFamily: "Black Han Sans",
                  }}
                >
                  <Link href={`/${page.link}`}>{page.name}</Link>
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
        <Grid
          mt={0}
          my={0}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
            <YouTube style={{ fontSize: "2.5rem", fill: "#E2B164" }} />
          </IconButton>{" "}
          <IconButton
            aria-label="facebook"
            component="a"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100069423533528"
          >
            <FacebookOutlined style={{ fontSize: "2.5rem", fill: "#E2B164" }} />
          </IconButton>
        </Grid>
        <Grid
          mt={15}
          // className={blackHanSans.className}
          sx={{
            display: "flex",
            letterSpacing: ".175rem",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            color: "white",
            fontSize: { xs: "1rem", md: "1.125rem" },
            textShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 8px rgba(0, 0, 0, 0.25)",
            width: "100vw",
          }}
        >
          <Link
            href="https://parkcrestdesign.com"
            aria-label="parkcrest design link"
          >
            <Typography variant="accent">
              {" "}
              Website by Parkcrest Design
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
