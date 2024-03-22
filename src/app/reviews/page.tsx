import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { AddBox } from "@mui/icons-material";

const ReviewsPage = () => {
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
          FILL IN GENRE, and the reviews and write-ups like the ones below are
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
      {reviews &&
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
    </Container>
  );
};

export default ReviewsPage;
