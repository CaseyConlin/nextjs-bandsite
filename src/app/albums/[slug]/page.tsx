import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const id = params.slug;

  const albumData = albums.find((album) => {
    return album.slug == id;
  });

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: albumData?.title,
    description: albumData?.metaDescription,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const albumData = albums.find((album) => {
    return album.slug == params.slug;
  });

  const reviewData = reviews.filter((review) => {
    return review.album.toLowerCase() == params.slug;
  });

  const links = albumData?.links ? albumData.links : undefined;

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
          links={links}
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
