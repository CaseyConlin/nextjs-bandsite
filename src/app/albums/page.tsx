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
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { InteriorImageCard } from "@/components/InteriorImageCard";
import { albums } from "@/data/albums";
import Link from "next/link";

// export async function generateStaticParams() {
//   // const reviewData: any = reviews.map((review) => {
//   //   console.log(review);
//   //   return { slug: review.id };
//   // });
//   return albums.map((album: any) =>
//     // console.log(review.id)
//     ({
//       slug: album.slug,
//     })
//   );
// }

export default function Page() {
  return (
    <>
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
          Albums
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
            Mark Brown&apos;s introspective lyrics have captivated audiences
            worldwide. With a career spanning most of a lifetime, Brown has
            consistently delivered authentic and heartfelt music that resonates
            with listeners on a profound level. This discography is a testament
            to a man&apos;s unwavering dedication to crafting authentic and
            soul-stirring music. With each album, he continues to push the
            boundaries of Americana music while staying true to his roots,
            earning him a well-deserved place among the genre&apos;s most
            revered artists.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          maxWidth={"xl"}
          p={2}
          pl={-1}
          margin={"auto"}
          justifyContent="space-evenly"
          sx={{ p: { xs: 1, md: 2 }, pl: { xs: 0, md: -1 } }}
        >
          {albums &&
            albums.map((album) => {
              return (
                <Grid
                  xs={12}
                  sm={5}
                  md={4}
                  alignSelf={"stretch"}
                  key={album.title}
                >
                  <InteriorImageCard
                    link={album.slug}
                    title={album.title}
                    imageSource={`${album.image}`}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
  //     return {albums.map((album: any) =>
  //     // console.log(review.id)
  //     ({
  //       slug: album.slug,
  //     })
  //   )}
  //   const albumData = albums.find((album) => {
  //     return params.slug == album.slug;
  //   });
  //   return albumData && <div>My Post: {albumData.title}</div>;
}

// export default function UniquePage({
//   params: { uniquepage },
// }: {
//   params: { uniquepage: string };
// }) {
//   const project = reviews.find((p) => p.id.toString() === uniquepage);
//   if (!project) {
//     // notFound()
//   }
//   console.log("hey");

//   return (
//     <main>
//       <p>hey</p>
//       {project && project.id && <p>ID Here:{project.id}</p>}
//       {/* <p>Title Here:{project.title}</p>
//       <p>Info Here:{project.info}</p> */}
//     </main>
//   );
// }
