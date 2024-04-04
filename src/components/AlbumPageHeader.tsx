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
};

export const AlbumPageHeader = ({
  title,
  description,
  imageSource,
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
            p={4}
            display="flex"
            justifyContent="center"
            // alignItems="center"
          >
            <CardMedia
              component="img"
              // height="200px"
              image={`/${imageSource}`}
              alt={`${title} album cover.`}
              sx={{
                borderRadius: "25px",
                width: "100%",
                // aspectRatio: "1/1",
                my: { xs: 2, md: 0 },
              }}
            />
          </Grid>
          <Grid md={7}>
            <CardContent sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box py={2}>
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
              <StreamingStack left={true} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
