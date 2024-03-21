"use client";

import { usePathname } from "next/navigation";

import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { blackHanSans } from "@/app/fonts";

const pages = ["Products", "Pricing", "Blog"];
const pagesLeft = ["Albums", "Videos", "Gigs"];
const pagesRight = ["Reviews", "Bio", "Contact"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pathName = usePathname();
  return (
    <AppBar
      position="absolute"
      sx={{
        mt: 5,
        bgcolor: pathName === "/" ? "transparent" : "rgba(0,0,0,50%)",
        boxShadow: "none",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", width: "100vw" }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              //   letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "Black Han Sans",
            }}
          >
            Mark Brown
          </Typography> */}
          {/* Mobile */}
          <Typography
            variant="accent"
            noWrap
            component="a"
            href="/"
            sx={{
              //   mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              //   fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              fontSize: "2rem",

              textAlign: "center",

              //   letterSpacing: ".3rem",
              color: "#E2B164",
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
              textDecoration: "none",
            }}
          >
            Mark Brown
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              width: "100vw",
            }}
          >
            {/* <Grid
              xs={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagesLeft.map((page) => (
                <Button
                  key={page}
                  className={blackHanSans.className}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    fontSize: "1.125rem",
                    textTransform: "capitalize",
                    color: "black",
                    display: "block",
                    // fontFamily: "Black Han Sans",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Grid> */}
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
                className={blackHanSans.className}
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
            {/* <Grid
              xs={4}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pagesRight.map((page) => (
                <Button
                  className={blackHanSans.className}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "1.125rem",
                    textTransform: "capitalize",
                    my: 2,
                    mx: 2,
                    color: "black",
                    display: "block",
                    // fontFamily: "Black Han Sans",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Grid> */}
          </Grid>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
export default NavBar;
