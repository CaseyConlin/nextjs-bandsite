import { Box, Typography } from "@mui/material";
import { blackHanSans, roboto } from "../app/fonts";

export const HomepageTextSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "1rem", md: "5rem" },
        paddingTop: { xs: "3rem", md: "5rem" },
        paddingBottom: { xs: "3rem", md: "5rem" },
        bgcolor: "#27221D",
        color: "white",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box maxWidth={"md"}>
        <Typography
          component="h1"
          className={blackHanSans.className}
          sx={{
            color: "#E2B164",
            // fontFamily: "Black Han Sans",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Mark Brown
        </Typography>
        <Typography
          mt="1rem"
          className={roboto.className}
          component="p"
          sx={{
            // fontFamily: "Roboto",
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "1rem",
            letterSpacing: ".1rem",
          }}
        >
          When you first listen to Mark Brown, you might find yourself wondering
          where he’s been and why it took him so long to get here. Combining a
          sharp eye with a sly sense of humor reminiscent of John Prine, Mark
          makes songs that hail from everywhere, incorporating ballads, cowboy
          songs, jigs, sideshow melodies, and field hollers. His songs give
          voice to craftsmen, broken-hearted mechanics, heavy equipment
          operators, squatters and girls with their dirt bikes. Like many of his
          characters, Mark’s been around: after growing up in Maryland, he’s
          done some farming, worked as a mechanic, spent years as a commercial
          fisherman in the northern Pacific and worked as a carpenter in the
          northeastern US. These experiences have influenced his music the way
          an oak cask influences good whiskey.
        </Typography>
        <Typography
          mt=".75rem"
          className={roboto.className}
          component="p"
          sx={{
            // fontFamily: "Roboto",
            textAlign: "center",
            fontWeight: "normal",
            fontSize: "1rem",

            letterSpacing: ".1rem",
          }}
        >
          Mark’s music is available on your favorite streaming service so you
          can listen there, or check out a few tracks in the discography and
          read some reviews. He’s played for people at home here in Ulster
          County, New York and all over the world; check the gigs page for
          upcoming shows, or catch a live performance or music video here. I’d
          love to connect on social media, by email or phone - reach out!
        </Typography>
      </Box>
    </Box>
  );
};
