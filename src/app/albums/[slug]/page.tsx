// export async function generateStaticParams() {
//   const posts = await fetch("@/data/reviews").then((res) => res.json());

//   return posts.map((post: any) => ({
//     slug: post.slug,
//   }));
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>;
// }

// import projectlist from '@/app/projects.json'
// import {notFound} from "next/navigation";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { albums } from "@/data/albums";
import { reviews } from "@/data/reviews";
import { AlbumPageHeader } from "@/components/AlbumPageHeader";
import { AudioPlayer } from "@/components/audioplayer/AudioPlayer";
import { ReviewCardSmall } from "@/components/ReviewCardSmall";
import SwipeableTextMobileStepper from "@/components/ui/reviewSlider/ReviewSlider";

export async function generateStaticParams() {
  // const reviewData: any = reviews.map((review) => {
  //   console.log(review);
  //   return { slug: review.id };
  // });
  return albums.map((album: any) => ({
    slug: album.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const albumData = albums.find((album) => {
    return album.slug == params.slug;
  });

  const reviewData = reviews.filter((review) => {
    return review.album.toLowerCase() == params.slug;
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
        {albumData?.title}
      </Typography>
      {albumData && (
        <AlbumPageHeader
          title={albumData.title}
          description={albumData.description}
          imageSource={albumData.image}
        />
      )}
      {albumData && <AudioPlayer album={albumData.title} />}
      {/* {reviewData &&
        reviewData.map((review) => {
          return (
            <ReviewCardSmall
              key={review.id}
              id={review.id}
              text={review.reviewText[0]}
              reviewer={review.reviewer}
            />
          );
        })} */}
      {reviewData && albumData && (
        <SwipeableTextMobileStepper
          albumTitle={albumData.title}
          albumReviews={reviewData}
        />
      )}
    </Container>
  );
}
