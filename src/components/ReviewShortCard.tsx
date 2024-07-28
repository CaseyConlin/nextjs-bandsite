import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LyricsIcon from "@mui/icons-material/Lyrics";

export type ReviewShortCardProps = {
  link: string;
  title: string;
  imageSource?: string;
  reviewer: string;
  random: number;
};
export const ReviewShortCard = ({
  link,
  title,
  imageSource,
  reviewer,
  random,
}: ReviewShortCardProps) => {
  return (
    <Link href={link}>
      <Card
        sx={{
          "&:hover": {
            opacity: ".85",
          },
          maxWidth: 450,
          borderRadius: "25px",
          height: "100%",
          backgroundColor: "rgba(255,255,255,85%)",
        }}
      >
        {imageSource ? (
          <CardMedia
            component="img"
            sx={{
              border: 0,
              borderRadius: "25px",
              padding: { xs: 1, md: 2 },
              height: "150px",
            }}
            alt={reviewer}
            image={`/${imageSource}`}
          />
        ) : (
          <Box
            sx={{
              border: 0,
              borderRadius: "25px",
              padding: { xs: 1, md: 2 },
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color:
                random === 1 ? "#433f3c" : random === 2 ? "#000" : "#27221D",
            }}
          >
            {random === 1 && (
              <QueueMusicIcon sx={{ height: "100%", fontSize: "10rem" }} />
            )}
            {random === 2 && (
              <LibraryMusicIcon sx={{ height: "100%", fontSize: "10rem" }} />
            )}
            {random === 3 && (
              <LyricsIcon sx={{ height: "100%", fontSize: "10rem" }} />
            )}
          </Box>
        )}

        <CardContent sx={{ p: { xs: 0, md: 1 }, px: { xs: 1, md: 2 } }}>
          <Typography>{title}</Typography>
          <Typography
            component="h2"
            variant="accent"
            fontSize="1.25rem"
            sx={{}}
          >
            {reviewer}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
