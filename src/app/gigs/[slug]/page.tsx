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

import { eventType, events } from "@/data/events";
import { reviews } from "@/data/reviews";
import { GigPageHeader } from "@/components/GigPageHeader";
import { AudioPlayer } from "@/components/audioplayer/AudioPlayer";
import { ReviewCardSmall } from "@/components/ReviewCardSmall";
import SwipeableTextMobileStepper from "@/components/ui/reviewSlider/ReviewSlider";
import { formatDate, formatTime } from "@/utilities/utilities";
export async function generateStaticParams() {
  // const reviewData: any = reviews.map((review) => {
  //   console.log(review);
  //   return { slug: review.id };
  // });
  return events.map((event: eventType) => ({
    slug: event.title.replaceAll(/\s/g, ""),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const eventData = events.find((event) => {
    return event.title.replaceAll(/\s/g, "") == params.slug;
  });

  return (
    eventData && (
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
          {eventData?.title}
        </Typography>

        <GigPageHeader
          title={eventData.title}
          date={eventData.eventDate}
          description={eventData.info}
          imageSource={eventData.imgSrc}
          link={eventData.ticketLink}
          ticketCost={eventData.ticketCost}
        />
      </Container>
    )
  );
}
