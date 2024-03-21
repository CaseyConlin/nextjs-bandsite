import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import { LinkButton } from "./ui/LinkButton";

export type VideoPageHeaderProps = {
  profileTitle: string;
  profileImage: string;
  text: string;
  cta: string;
};

export const VideoPageHeader = ({
  profileTitle,
  profileImage,
  text,
  cta,
}: VideoPageHeaderProps) => {
  return (
    <>
      <Card
        sx={{
          m: { xs: 1, sm: 2 },
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
        }}
      >
        <Grid
          container
          flexDirection="row"
          sx={{ justifyContent: { xs: "center" } }}
        >
          <Grid
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              height="200px"
              image={profileImage}
              alt={profileTitle}
              sx={{ borderRadius: "50%", width: 200, my: { xs: 2, md: 0 } }}
            />
          </Grid>
          <Grid md={8}>
            <CardContent sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="accent" component="h2">
                {profileTitle}
              </Typography>
              <Box py={2}>
                <Typography
                  fontSize="1rem"
                  variant="body2"
                  color="text.secondary"
                  pb={1.5}
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  {text}
                </Typography>
                <Typography
                  fontSize="1rem"
                  variant="body2"
                  color="text.secondary"
                  sx={{ whiteSpace: "break-spaces" }}
                >
                  {cta}
                </Typography>
              </Box>
              <LinkButton
                text="Subscribe"
                link={"https://www.youtube.com/@Mark-ew7id"}
                newWindow
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
