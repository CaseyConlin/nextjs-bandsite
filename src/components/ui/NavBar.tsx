"use client";

import { useState, useEffect, useContext, MouseEvent } from "react";
import { NavMenuContext } from "../context/navMenuContext";

import { usePathname } from "next/navigation";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MenuItem from "@mui/material/MenuItem";
import { Slide } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { hideNavState } = useContext(NavMenuContext);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathName = usePathname();
  return (
    <Slide
      direction="down"
      in={!hideNavState}
      appear={false}
      easing={{
        enter: "linear",
        exit: "linear",
      }}
    >
      <AppBar
        position="absolute"
        sx={{
          mt: 5,
          bgcolor: pathName === "/" ? "transparent" : "rgba(0,0,0,50%)",
          boxShadow: "none",
          // display: hideNavState ? "none" : "block",
        }}
      >
        <Grid
          container
          position="relative"
          sx={{ display: "flex", justifyContent: "center", width: "100vw" }}
        >
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="accent"
              noWrap
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                fontSize: "2rem",
                textAlign: "center",
                color: "#E2B164",
                textShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                textDecoration: "none",
              }}
            >
              <Link href="/">Mark Brown</Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", right: "0" },
              }}
            >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#E2B164" }}
              >
                <MenuOpenIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorReference="none"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                    "& .MuiPopover-paper": {
                      right: 0,
                      width: "50vw",
                      borderRadius: "0px",
                      borderBottomLeftRadius: "10px",
                    },
                  },
                }}
              >
                {pagesLeft.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={`/${page.link}`}>{page.name}</Link>
                    </Typography>
                  </MenuItem>
                ))}
                {pagesRight.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={`/${page.link}`}>{page.name}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Grid
              container
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <Grid
                xs={4}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pagesLeft.map((page) => (
                  <Typography
                    variant="accent"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: { md: 1, lg: 2 },
                      fontSize: "1.25rem",
                      textTransform: "capitalize",
                      color: pathName === "/" ? "black" : "white",
                      display: "block",
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
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                    fontSize: { md: "2.5rem", xl: "3.5rem" },
                    textAlign: "center",
                    color: "#E2B164",
                    textShadow:
                      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    textDecoration: "none",
                    mx: { md: 3, lg: 5 },
                  }}
                >
                  Mark Brown
                </Typography>
              </Grid>
              <Grid
                xs={4}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-start",
                }}
              >
                {pagesRight.map((page) => (
                  <Typography
                    variant="accent"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      fontSize: "1.25rem",
                      textTransform: "capitalize",
                      my: 2,
                      mx: { md: 1, lg: 2 },
                      color: pathName === "/" ? "black" : "white",
                      display: "block",
                    }}
                  >
                    <Link href={`/${page.link}`}>{page.name}</Link>
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </Slide>
  );
};
export default NavBar;
