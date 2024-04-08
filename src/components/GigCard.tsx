// import { VideoPlayerProps } from "./HomepageVideoPlayer";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { formatDate } from "@/utilities/utilities";

export type GigCardProps = {
  link: string;
  title: string;
  imageSource: string;
  date: string;
  venue: string;
};
export const GigCard = ({
  link,
  title,
  imageSource,
  date,
  venue,
}: GigCardProps) => {
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
          // allow="fullscreen"
        />
        <CardContent sx={{ p: { xs: 0, md: 1 }, px: { xs: 0, md: 2 } }}>
          <Typography
            component="h2"
            variant="accent"
            fontSize="1.25rem"
            sx={{}}
          >
            {title}
          </Typography>
          <Typography component="p" py={1} variant="accent">
            {formatDate(date)}
          </Typography>
          <Typography>{venue}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
