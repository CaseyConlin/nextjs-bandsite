import Box from "@mui/material/Box";
import bg from "../../public/markbrownhappyhourcovernotext.webp";

export const HomepageHero = () => {
  return (
    <Box
      className="homepage-hero-container"
      sx={{
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
  );
};
