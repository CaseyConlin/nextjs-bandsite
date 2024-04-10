import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

import { StreamingStack } from "./ui/StreamingStack";

export type AlbumPageHeaderProps = {
  title: string;
  description: string[];
  imageSource: string;
  links?: {
    appleMusicLink?: string;
    amazonMusicLink?: string;
    spotifyLink?: string;
    pandoraLink?: string;
    cdLink?: string;
  };
};

export const AlbumPageHeader = ({
  title,
  description,
  imageSource,
  links,
}: AlbumPageHeaderProps) => {
  return (
    <>
      <Card
        sx={{
          m: { xs: 1, sm: 2 },
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,85%)",
        }}
      >
        <Grid
          container
          flexDirection="row"
          sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
          <Grid
            md={5}
            display="flex"
            justifyContent="center"
            alignContent="flex-start"
            flexWrap="wrap"
            sx={{ px: { xs: 1, md: 4 }, py: { xs: 1, sm: 2 } }}
          >
            <CardMedia
              component="img"
              image={`/${imageSource}`}
              alt={`${title} album cover.`}
              sx={{
                borderRadius: "25px",
                width: "100%",
                my: { xs: 0, md: 0 },
                p: 2,
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid md={7}>
            <CardContent sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box sx={{ py: { xs: 0, sm: 2 } }}>
                {description &&
                  description.map((desc, i) => {
                    return (
                      <Typography
                        key={i}
                        fontSize="1rem"
                        variant="body2"
                        color="text.secondary"
                        pb={1.5}
                        sx={{ whiteSpace: "break-spaces" }}
                      >
                        {desc}
                      </Typography>
                    );
                  })}
              </Box>
              {links && <StreamingStack links={links} />}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
