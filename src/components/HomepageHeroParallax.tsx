"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useContext } from "react";

import Box from "@mui/material/Box";

import { NavMenuContext } from "./context/navMenuContext";

import bg from "../../public/markbrownhappyhourcovernotext.webp";
import backgroundLayer from "../../public/background-layer-1.webp";
import midLayer from "../../public/mid-layer-1.webp";
import markLayer from "../../public/mark-layer-1.webp";

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
    const divScroll = ref.current?.scrollTop;
    setHideNavState(true);

    if (divScroll && divScroll > heightToHideFrom) {
      // hideNav && // to limit setting state only the first time
      () => {
        setHideNavState(true);
      };
    } else {
      setHideNavState(false);
    }
  };

  return (
    <>
      <Box
        className="homepage-hero-container"
        sx={{
          display: { sm: "none" },
          backgroundImage: `url(${bg.src})`,
          minHeight: "100vh",
          width: "100vw",
          height: { xs: "100vh", md: "200vh" },
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center ",
        }}
      ></Box>
      <Box
        component="div"
        sx={{
          display: { xs: "none", sm: "block" },
          // mt: -8,
          // mt: 5,
          // mt: hideNav ? -8 : 5,
          // zIndex: hideNav ? 11 : 1,
          position: "relative",
          // height: "100vh",
          // minHeight: "100vh",
          // overflowX: "hidden",
          perspective: "1000px",
          "@supports (-webkit-hyphens: none)": {
            perspective: "-1000px",
          },
          // WebkitPerspective: "-1000px",
          // overflow: "visible",
          // width: "100vw",
          height: "100vh",
          width: "100vw",
          overflowY: "auto",
          overflowX: "hidden",
          background: "#27221D",
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
            transform: "translateZ(0px)",
            "@supports (-webkit-hyphens: none)": {
              transform: "translateZ(0px)",
            },
            // "& @media screen and (-webkit-min-device-pixel-ratio:0)": {
            //   WebkitTransform: "translateZ(-250px)",
            // },
            // "&::i-block-chrome": { display: "none" },
            // backgroundImage: `url(/Background.webp)`,

            // image: [`/events/${eventData?.imgSrc}`],

            // height: "100rem",
            // height: "10vh",
            width: { xs: "200vw", sm: "100vw" },
            minHeight: "50vh",
            // height: "100vh",
            marginLeft: { xs: "-50vw", sm: 0 },
            height: "100vh",
            marginBottom: -5,

            // width: "100vw",
            // height: { xs: "100vh", md: "200vh" },
            // objectFit: "cover",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "top center ",
          }}
        >
          <Image
            src={backgroundLayer}
            alt="Scenic background at country landfill."
            layout="responsive"
            objectFit="cover"
          />
          {/* <img
          src="/background-layer-1.webp"
          style={{ marginLeft: "-50vw", width: "200vw", height: "auto" }}
        /> */}
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
            transform: "translateZ(200px)",
            "@supports (-webkit-hyphens: none)": {
              transform: "translateZ(100px)",
            },
            width: { xs: "200vw", sm: "100vw" },
            marginLeft: { xs: "-50vw", sm: 0 },
            height: "50vh",

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
          <Image
            src={midLayer}
            alt="Scenic background at country landfill."
            layout="responsive"
            objectFit="cover"
          />
          {/* <img
          src="/mid-layer-1.webp"
          style={{
            marginLeft: "-50vw",
            width: "200vw",

            height: "auto",
          }}
        /> */}
        </Box>
        <Box
          // MARK
          component="div"
          sx={{
            position: "absolute",
            // top: 100,
            top: { xs: 60, sm: 80 },
            // top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "translateZ(1px)",
            "@supports (-webkit-hyphens: none)": {
              transform: "translateZ(150px)",
            }, // backgroundImage: `url(/Markforeground.webp)`,
            // overflowY: "visible",
            // minHeight: "20vh",
            // width: "100vw",
            // height: { xs: "20vh", md: "100vh" },
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            // overflowY: "auto",
            height: "50vh",
            width: { xs: "200vw", sm: "100vw" },
            marginLeft: { xs: "-50vw", sm: 0 },
          }}
        >
          {/* <img
          src="/mark-layer.webp"
          style={{
            marginLeft: "-50vw",
            width: "200vw",
            height: "auto",
            objectFit: "cover",
          }}
          alt="Mark Brown"
        /> */}
          <Image
            src={markLayer}
            alt="Mark Brown, country / Americana singer at country landfill."
            layout="responsive"
            objectFit="cover"
          />
        </Box>
      </Box>
    </>
  );
};
