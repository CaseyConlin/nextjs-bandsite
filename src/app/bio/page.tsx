import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const metadata = {
  title: "Biography",
  description:
    "Info about Mark Brown, musician playing Americana, country, folk, and indie music.",
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
        Mark Brown Biography
      </Typography>
      <Grid2
        columnSpacing={5}
        container
        sx={{
          m: { xs: 1, sm: 2 },

          py: { xs: 1, md: 3 },
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,85%)",
          fontSize: "1rem",
        }}
      >
        <Grid2 xs={12} sm={6} lg={3} p={1}>
          <Box
            position="relative"
            width="100%"
            component="div"
            sx={{ height: { xs: "250px", sm: "50vh", lg: "100%" } }}
          >
            <Image
              fill
              src="/MarkBrown.webp"
              alt="Mark Brown headshot"
              //   object-fit="contain"
              objectFit="cover"
              style={{ borderRadius: "25px" }}
            ></Image>
          </Box>
        </Grid2>
        <Grid2 xs={12} sm={6} lg={9} sx={{ px: { xs: 1, sm: 2 } }}>
          <Box component="div">
            <Typography pb={2}>
              Meet{" "}
              <Link href="/" style={{ textDecoration: "underline" }}>
                Mark Brown
              </Link>
              , an epitome of Americana music. It all started when Mark got his
              hands on his first Johnny Cash record at the tender age of 6. That
              vinyl became his prized possession, spinning tales of love,
              heartache, and the raw essence of American life. He listened until
              the grooves wore thin, absorbing every note and image like a
              sponge. It was a pivotal moment in 1975 when a farrier took him to
              his very first Tom Waits show that ignited a fire in Mark&apos;s
              soul. The music set fire to the barn, flipped the car in the
              ditch, and transformed Mark&apos;s trajectory forever. From that
              moment on, he knew music wasn&apos;t just a passion but a calling.
              Mark has been honing his craft, writing songs that are as
              carefully constructed as a Swiss watch, yet with a soulful
              integrity that resonates like an old grandfather clock. His music
              never takes itself too seriously, reflecting the down-to-earth
              charm that defines Americana.
            </Typography>
            <Typography pb={2}>
              With his band Uncle Buckle, Mark has shared stages and crafted
              memories. Now, with his third album, he&apos;s exploring his solo
              sound with a backing band of both longtime collaborators and
              newfound friends. Together, they create a musical tapestry that
              paints vivid scenes of back roads, tar paper shacks, hope,
              heartbreak and a few cans of beer along with a cast of characters
              that are at once hard to place but at the same time oddly
              familiar.
            </Typography>
            <Typography pb={2}>
              In his latest album,{" "}
              <Link
                href="/albums/happyhour"
                style={{ textDecoration: "underline" }}
              >
                Happy Hour
              </Link>
              , Mark&apos;s distinctive voice is accompanied by his band of
              longtime friends: Ken McGloin joining in on guitar, Mark Murphy on
              bass, Dean Sharp on drums and the versatile talents of Dean Jones.
              When they play, it&apos;s as if the time stands still, the lights
              dim and fine but agreeable dust settles in the room transporting
              listeners to another place where the roads are narrow and winding,
              the fields wide and the mountains high.
            </Typography>
            <Typography pb={2}>
              Beyond the studio and stage, Mark takes his music{" "}
              <Link href="/gigs" style={{ textDecoration: "underline" }}>
                on the road
              </Link>
              , and has captivated audiences across in Ireland, Alaska and some
              places in between with his solo tours. His singing and songwriting
              skills have garnered{" "}
              <Link href="/reviews" style={{ textDecoration: "underline" }}>
                attention and praise
              </Link>
              , solidifying his status as a rising star in the Americana scene.
            </Typography>
            <Typography pb={2}>
              So next time you&apos;re in need of a musical journey through the
              heartland of America, look no further than Mark Brown. With each
              strum of his guitar and every lyric he sings, he invites you to
              join him on a road trip through the soul of Americana.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
