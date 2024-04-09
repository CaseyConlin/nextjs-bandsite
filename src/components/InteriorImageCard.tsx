// import { VideoPlayerProps } from "./HomepageVideoPlayer";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export type ImageCardProps = {
  link: string;
  title: string;
  imageSource: string;
};
export const InteriorImageCard = ({
  link,
  title,
  imageSource,
}: ImageCardProps) => {
  return (
    <Link href={link}>
      <Card
        sx={{
          "&:hover": {
            opacity: ".85",
          },
          maxWidth: 450,
          borderRadius: "25px",
          height: "auto",
          backgroundColor: "rgba(255,255,255,85%)",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            border: 0,
            borderRadius: "25px",
            padding: { xs: 1, md: 2 },
          }}
          alt={title}
          image={`/${imageSource}`}
        />
      </Card>
    </Link>
  );
};
