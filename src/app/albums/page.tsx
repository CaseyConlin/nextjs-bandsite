import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { albums } from "@/data/albums";

import { InteriorImageCard } from "@/components/InteriorImageCard";

export const metadata = {
  title: "Albums & Discograpy",
  description:
    "Albums & discography for Americana, country, folk, indie musician, Mark Brown.",
};

export default function Page() {
  return (
    <>
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
          Albums
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
          <Typography>
            Mark Brown&apos;s introspective lyrics have captivated audiences
            worldwide. With a career spanning most of a lifetime, Brown has
            consistently delivered authentic and heartfelt music that resonates
            with listeners on a profound level. This discography is a testament
            to a man&apos;s unwavering dedication to crafting authentic and
            soul-stirring music. With each album, he continues to push the
            boundaries of Americana music while staying true to his roots,
            earning him a well-deserved place among the genre&apos;s most
            revered artists.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          p={2}
          pl={-1}
          margin={"auto"}
          justifyContent="space-evenly"
          sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
        >
          {albums &&
            albums.map((album) => {
              return (
                <Grid
                  xs={12}
                  sm={5}
                  md={4}
                  alignSelf={"stretch"}
                  key={album.title}
                >
                  <InteriorImageCard
                    link={album.slug}
                    title={album.title}
                    imageSource={`${album.image}`}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
