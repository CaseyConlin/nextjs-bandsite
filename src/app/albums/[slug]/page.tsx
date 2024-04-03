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
import { albums } from "@/data/albums";

export async function generateStaticParams() {
  // const reviewData: any = reviews.map((review) => {
  //   console.log(review);
  //   return { slug: review.id };
  // });
  return albums.map((album: any) =>
    // console.log(review.id)
    ({
      slug: album.slug,
    })
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  const albumData = albums.find((album) => {
    return params.slug == album.slug;
  });
  return albumData && <div>My Post: {albumData.title}</div>;
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
