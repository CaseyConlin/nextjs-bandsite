import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { GigPageHeader } from "@/components/GigPageHeader";
import { eventType, events } from "@/data/events";

export async function generateStaticParams() {
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
