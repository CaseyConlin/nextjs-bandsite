import Link from "next/link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import {
  ReviewShortCard,
  ReviewShortCardProps,
} from "@/components/ReviewShortCard";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "Reviews",
  description:
    "Reviews for Mark Brown's Americana music albums and performances.",
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
        Press & Reviews
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
          My friends and I put a lot ourselves into the music we write and play,
          and I’m grateful to all the folks who put the time in to listen and
          review my music as well as the music and art of all the other great
          acts out there. We like to think we’re contributing in our own way to
          Americana, and the reviews and write-ups like the ones below are
          definitely part of that, too.
        </Typography>
        <Typography py={2}>
          If you’d like to request a CD or other material for review purposes,
          please reach out to me at{" "}
          <b>
            {" "}
            <a href="mailto:mark@unclebuckle.com">mark@unclebuckle.com</a>
          </b>
          .
        </Typography>
      </Box>

      {reviews.length > 0 && (
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          p={2}
          pl={-1}
          margin={"auto"}
          justifyContent="space-evenly"
          // alignSelf={"stretch"}
          sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
        >
          {reviews.map((review, i) => {
            return (
              <Grid
                xs={12}
                sm={5}
                md={3}
                alignSelf={"stretch"}
                key={review.slug}
              >
                <ReviewShortCard
                  title={review.title}
                  imageSource={review.reviewerImageSrc}
                  link={review.slug}
                  reviewer={review.reviewer}
                  random={Math.floor(Math.random() * (3 - 1 + 1) + 1)}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
