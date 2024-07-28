import type { Metadata } from "next";
import Link from "next/link";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { reviews } from "@/data/reviews";

import { ReviewCard } from "@/components/ReviewCard";
import { albumReviewType } from "@/data/reviews";

export async function generateStaticParams() {
  return reviews.map((review: albumReviewType) => ({
    slug: review.slug.replaceAll(/\s/g, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const id = params.slug;

  const reviewData = reviews.find((review) => {
    return review.slug == id;
  });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: reviewData?.title,
    description: reviewData?.reviewText[0],
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

// export const metadata = {
//   title: "Reviews",
//   description:
//     "Reviews for Mark Brown's Americana music albums and performances.",
// };

export default function Page({ params }: { params: { slug: string } }) {
  const reviewData = reviews.find((review) => {
    return review.slug == params.slug;
  });

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
      {reviewData && <ReviewCard review={reviewData} />}

      <Link href="/reviews">
        <Typography
          variant="accent"
          color="white"
          pl={2}
          fontSize="2rem"
          sx={{
            textShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Back to Reviews
        </Typography>
      </Link>
    </Container>
  );
}
