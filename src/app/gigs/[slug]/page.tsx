import type { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { GigPageHeader } from "@/components/GigPageHeader";
import { eventType, events } from "@/data/events";

export async function generateStaticParams() {
  return events.map((event: eventType) => ({
    slug: event.title.replaceAll(/\s/g, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const id = params.slug;

  const eventData = events.find((event) => {
    return event.title.replaceAll(/\s/g, "") == id;
  });

  return {
    title: eventData?.title,
    description: eventData?.info[0],
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const eventData = events.find((event) => {
    return event.title.replaceAll(/\s/g, "") == params.slug;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: eventData?.title,
    startDate: eventData?.eventStartDate,
    endDate: eventData?.eventEndDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: eventData?.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: eventData?.address,
        addressLocality: eventData?.town,
        postalCode: eventData?.zip,
        addressRegion: eventData?.state,
        addressCountry: eventData?.country,
      },
    },
    image: [`/events/${eventData?.imgSrc}`],
    description: eventData?.info[0],
    offers: {
      "@type": "Offer",
      url: eventData?.ticketLink,
      price: eventData?.ticketCost ? eventData.ticketCost : "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: eventData?.added ? eventData.added : eventData?.eventStartDate,
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Mark Brown",
    },
  };

  return (
    eventData && (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
            date={eventData.eventStartDate}
            description={eventData.info}
            imageSource={eventData.imgSrc}
            link={eventData.ticketLink}
            ticketCost={eventData.ticketCost}
          />
        </Container>
      </>
    )
  );
}
