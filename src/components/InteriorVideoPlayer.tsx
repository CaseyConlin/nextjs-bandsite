// import { VideoPlayerProps } from "./HomepageVideoPlayer";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const InteriorVideoCard = ({
  title,
  description,
  source,
}: VideoPlayerProps) => {
  return (
    <Card sx={{ maxWidth: 450, borderRadius: "25px", height: "100%" }}>
      <CardMedia
        component="iframe"
        sx={{
          border: 0,
          aspectRatio: "16 / 9",
          borderRadius: "25px",
          // width: { md: "45vw" },
          padding: { xs: 1, md: 2 },
        }}
        title={title}
        src={source}
        allow="fullscreen"
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="accent">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
