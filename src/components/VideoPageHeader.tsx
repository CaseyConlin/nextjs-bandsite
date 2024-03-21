import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LinkButton } from "./ui/LinkButton";

export type VideoPageHeaderProps = {
  profileTitle: string;
  profileImage: string;
};

export const VideoPageHeader = ({
  profileTitle,
  profileImage,
}: VideoPageHeaderProps) => {
  return (
    <>
      <Card
        sx={{ m: 2, maxWidth: { xs: "xs", md: "xl" }, borderRadius: "25px" }}
      >
        <Grid container flexDirection="row">
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
              sx={{ borderRadius: "50%", width: 200 }}
            />
          </Grid>
          <Grid md={8}>
            <CardContent>
              <Typography variant="accent" component="h2">
                {profileTitle}
              </Typography>
              <Typography
                fontSize="1rem"
                variant="body2"
                color="text.secondary"
                py={1.5}
              >
                Check out our YouTube page for music videos, live performances
                and more. "Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
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
