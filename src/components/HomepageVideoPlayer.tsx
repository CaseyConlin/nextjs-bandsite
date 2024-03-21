import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export const HomepageVideo = ({
  source,
  title,
  description,
}: VideoPlayerProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "black",
        width: "100vw",
      }}
    >
      <Card
        sx={{
          display: "flex",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          bgcolor: "transparent",
          boxShadow: "none",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CardMedia
          component="iframe"
          sx={{
            border: 0,
            aspectRatio: "16 / 9",
            borderRadius: "25px",
            width: { md: "45vw" },
          }}
          title={title}
          src={source}
          allow="fullscreen"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              flex: "1 0 auto",
              width: { xs: "95vw", md: "25vw" },
              padding: "2rem",
            }}
          >
            <Typography
              component="h3"
              variant="accent"
              style={{
                fontSize: "1.8rem",
                color: "#E2B164",
              }}
            >
              {title}
            </Typography>
            <Typography
              py={2}
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fontSize={"1rem"}
              sx={{ color: "white" }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};
