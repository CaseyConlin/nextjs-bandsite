import Link from "next/link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { SocialItems } from "@/components/SocialItems";

export const metadata = {
  title: "Contact",
  description:
    "Contact page and social media profiles for Americana, country, folk, indie musician, Mark Brown.",
};

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
          If you want to book a show, request a CD, get more info, or just reach
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
        <SocialItems />
      </Box>
    </Container>
  );
}
