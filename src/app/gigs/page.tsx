import Link from "next/link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GigPageLayout } from "@/components/GigPageLayout";

import { events } from "@/data/events";

import { GigCard } from "@/components/GigCard";

export const metadata = {
  title: "Gigs & Events",
  description:
    "Events and performances in America and England for Americana, country, folk, indie musician, Mark Brown.",
};

export default function Page() {
  return <GigPageLayout />;
  // const futureEvents = events.filter((event) => {
  //   return new Date(event.eventStartDate).getTime() >= Date.now();
  // });

  // const pastEvents = events.filter((event) => {
  //   return new Date(event.eventStartDate).getTime() < Date.now();
  // });

  // return (
  //   <>
  //     <Container maxWidth="xl">
  //       <Typography
  //         component="h1"
  //         variant="accent"
  //         color="white"
  //         pt={18}
  //         pl={2}
  //         fontSize="3rem"
  //         sx={{
  //           textShadow:
  //             "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  //         }}
  //       >
  //         Gigs{" "}
  //       </Typography>
  //       <Box
  //         component="div"
  //         sx={{
  //           m: { xs: 1, sm: 2 },
  //           p: 2,
  //           py: 3,
  //           maxWidth: { xs: "xs", md: "xl" },
  //           borderRadius: "25px",
  //           backgroundColor: "rgba(255,255,255,85%)",
  //           fontSize: "1rem",
  //         }}
  //       >
  //         <Typography component="p">
  //           Whether it&apos;s a gig at home in the Hudson Valley, or across the
  //           pond in Europe, we love playing live and sharing our music with
  //           audiences. Stay tuned to our page here for upcoming shows and tour
  //           dates. Don&apos;t miss your chance to experience the magic of our
  //           tunes live and in person - grab your tickets today and join us for
  //           an unforgettable musical experience.
  //         </Typography>
  //         <Typography fontWeight={500} component="p" my={2}>
  //           To book a gig or show, reach out at{" "}
  //           <Link href="mark@unclebuckle.com" style={{ fontWeight: "900" }}>
  //             mark@unclebuckle.com
  //           </Link>
  //           !
  //         </Typography>
  //       </Box>
  //       <Typography
  //         component="h2"
  //         variant="accent"
  //         color="white"
  //         sx={{
  //           pl: 2,
  //           pt: 3,
  //           fontSize: "2rem",
  //           textShadow:
  //             "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  //         }}
  //       >
  //         Upcoming Gigs
  //       </Typography>
  //       {futureEvents.length > 0 ? (
  //         <Grid
  //           container
  //           spacing={2}
  //           maxWidth={"xl"}
  //           p={2}
  //           pl={-1}
  //           margin={"auto"}
  //           justifyContent="space-evenly"
  //           sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
  //         >
  //           {futureEvents.map((event) => {
  //             return (
  //               <Grid
  //                 xs={12}
  //                 sm={5}
  //                 md={4}
  //                 alignSelf={"stretch"}
  //                 alignItems={"stretch"}
  //                 height={"100%"}
  //                 key={event.title}
  //               >
  //                 <GigCard
  //                   link={event.title.replaceAll(/\s/g, "")}
  //                   title={event.title}
  //                   imageSource={`events/${event.imgSrc}`}
  //                   date={event.eventStartDate}
  //                   venue={event.venue}
  //                 />
  //               </Grid>
  //             );
  //           })}
  //         </Grid>
  //       ) : (
  //         <Typography
  //           component="p"
  //           variant="accent"
  //           color="white"
  //           sx={{
  //             pl: 3,
  //             pt: 3,
  //             fontSize: "1.25rem",
  //             textShadow:
  //               "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  //           }}
  //         >
  //           Check Back for More Gigs...
  //         </Typography>
  //       )}
  //       <Typography
  //         component="h2"
  //         variant="accent"
  //         color="white"
  //         sx={{
  //           pl: 2,
  //           pt: 3,
  //           fontSize: "2rem",
  //           textShadow:
  //             "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  //         }}
  //       >
  //         Past Gigs
  //       </Typography>
  //       {pastEvents.length > 0 ? (
  //         <Grid
  //           container
  //           spacing={2}
  //           maxWidth={"xl"}
  //           p={2}
  //           pl={-1}
  //           margin={"auto"}
  //           justifyContent="space-evenly"
  //           sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
  //         >
  //           {pastEvents.map((event) => {
  //             return (
  //               <Grid
  //                 xs={12}
  //                 sm={5}
  //                 md={4}
  //                 alignSelf={"stretch"}
  //                 key={event.title}
  //               >
  //                 <GigCard
  //                   link={event.title.replaceAll(/\s/g, "")}
  //                   title={event.title}
  //                   imageSource={`events/${event.imgSrc}`}
  //                   date={event.eventStartDate}
  //                   venue={event.venue}
  //                 />
  //               </Grid>
  //             );
  //           })}
  //         </Grid>
  //       ) : (
  //         <Typography
  //           component="p"
  //           variant="accent"
  //           color="white"
  //           sx={{
  //             pl: 3,
  //             pt: 3,
  //             fontSize: "1.25rem",
  //             textShadow:
  //               "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  //           }}
  //         ></Typography>
  //       )}
  //     </Container>
  //   </>
  // );
}
