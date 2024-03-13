import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { blackHanSans, roboto } from "@/app/fonts";

export const HomepageVideo = () => {
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
          src="https://www.youtube.com/embed/T7yoIB4v8UM?si=1BwTmNHpGOgKjv7M"
          // alt="Mark Brown Plays Acetone at the Rosendale Cafe."
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{ flex: "1 0 auto", width: "25vw", padding: "2rem" }}
          >
            <Typography
              component="div"
              variant="h3"
              className={blackHanSans.className}
              style={{
                // fontFamily: "Black Han Sans",
                fontSize: "1.8rem",
                color: "#E2B164",
              }}
            >
              Acetone
            </Typography>
            <Typography
              py={2}
              variant="subtitle1"
              color="text.secondary"
              //   fontFamily={"Roboto"}
              className={roboto.className}
              component="div"
              fontSize={"1rem"}
              sx={{ color: "white" }}
            >
              This is from a show we did on the lawn at the Rosendale Cafe last
              summer. I&apos;m playing along with John Hughes, Ken McGloin and
              Dean Jones- its always been a pleasure for us to play at our home
              town venue...
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};
