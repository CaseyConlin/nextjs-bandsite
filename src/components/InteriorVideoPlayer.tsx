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
          padding: 2,
        }}
        title={title}
        src={source}
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
