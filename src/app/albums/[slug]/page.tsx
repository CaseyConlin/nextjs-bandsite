import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SwipeableTextMobileStepper from "@/components/ui/reviewSlider/ReviewSlider";

import { albumType, albums } from "@/data/albums";
import { reviews } from "@/data/reviews";

import { AlbumPageHeader } from "@/components/AlbumPageHeader";
import { AudioPlayer } from "@/components/audioplayer/AudioPlayer";

export async function generateStaticParams() {
  return albums.map((album: albumType) => ({
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

      {reviewData.length > 0 && albumData && (
        <SwipeableTextMobileStepper
          albumTitle={albumData.title}
          albumReviews={reviewData}
        />
      )}
    </Container>
  );
}
