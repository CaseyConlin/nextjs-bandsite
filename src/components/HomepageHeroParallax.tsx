"use client";
import { useEffect, useRef, useState, useContext } from "react";
import Box from "@mui/material/Box";
import { NavMenuContext } from "./context/navMenuContext";

export const HomepageHeroParallax = () => {
  const { setHideNavState } = useContext(NavMenuContext);
  // const [hideNav, setHideNav] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const div = ref.current;
    div?.addEventListener("scroll", listenToScroll);
    return () => div?.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 20;
    const winScroll = ref.current?.scrollTop;
    setHideNavState(true);

    if (winScroll && winScroll > heightToHideFrom) {
      // hideNav && // to limit setting state only the first time
      () => {
        setHideNavState(true);
      };
    } else {
      setHideNavState(false);
    }
    console.log(winScroll);
  };

  return (
    // <Box
    //   className="homepage-hero-container"
    //   sx={{
    //     backgroundImage: `url(${bg.src})`,
    // minHeight: "100vh",
    // width: "100vw",
    // height: { xs: "100vh", md: "200vh" },
    // objectFit: "cover",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "top center ",
    //   }}
    // ></Box>
    <Box
      component="div"
      sx={{
        // mt: -8,
        // mt: 5,
        // mt: hideNav ? -8 : 5,
        // zIndex: hideNav ? 11 : 1,
        position: "relative",
        // height: "100vh",
        // minHeight: "100vh",
        // overflowX: "hidden",
        perspective: "1000px",
        // overflow: "visible",
        // width: "100vw",
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
        overflowX: "hidden",
        background: "#27221D",
        mb: -2,
      }}
      ref={ref}
    >
      <Box
        //SKY
        component="div"
        sx={{
          position: "absolute",

          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: "translateZ(250px)",

          // backgroundColor: "red",
          // backgroundImage: `url(/Background.webp)`,

          // image: [`/events/${eventData?.imgSrc}`],

          // height: "100rem",
          // height: "10vh",
          width: "100vw",
          minHeight: "100vh",
          height: "100vh",
          // width: "100vw",
          // height: { xs: "100vh", md: "200vh" },
          // objectFit: "cover",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "top center ",
        }}
      >
        <img
          src="/background-layer-1.webp"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        //TRASH

        component="div"
        sx={{
          position: "absolute",
          // top: 100,
          // top: 10,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: "translateZ(100px)",
          // transformStyle: "preserve-3d",
          // backgroundColor: "green",
          // backgroundImage: `url(/Midground.webp)`,

          // objectFit: "cover",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "top center ",
          // minHeight: "100vh",
          // height: "100rem",
          // height: "100vh",
          // width: "100vw",
        }}
      >
        <img
          src="/mid-layer-1.webp"
          style={{ width: "100vw", height: "auto" }}
        />
      </Box>
      <Box
        // MARK
        component="div"
        sx={{
          position: "absolute",
          top: 100,
          // top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transform: "translateZ(1px)",
          // backgroundImage: `url(/Markforeground.webp)`,
          // overflowY: "visible",
          // minHeight: "20vh",
          // width: "100vw",
          // height: { xs: "20vh", md: "100vh" },
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          // overflowY: "auto",
        }}
      >
        <img
          src="/mark-layer.webp"
          style={{ width: "100vw", height: "auto", objectFit: "cover" }}
          alt="Mark Brown"
        />
      </Box>
    </Box>
  );
};
