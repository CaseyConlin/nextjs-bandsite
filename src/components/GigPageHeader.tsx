import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

import { LinkButton } from "./ui/LinkButton";
import { formatDate, formatTime } from "@/utilities/utilities";

export type GigPageHeaderProps = {
  title: string;
  date: string;
  description: string[];
  imageSource: string;
  link: string;
  ticketCost?: string;
};

export const GigPageHeader = ({
  title,
  date,
  description,
  imageSource,
  link,
  ticketCost,
}: GigPageHeaderProps) => {
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
            sx={{ p: { xs: 1, md: 4 } }}
          >
            <CardMedia
              component="img"
              image={`/events/${imageSource}`}
              alt={`${title}.`}
              sx={{
                borderRadius: "25px",
                width: "100%",
                my: { xs: 2, md: 0 },
              }}
            />
          </Grid>
          <Grid md={7}>
            <CardContent
              sx={{
                textAlign: { xs: "center", md: "left" },
                py: { xs: 0, md: 2 },
              }}
            >
              <Box sx={{ py: { md: 2 } }}>
                <Box py={2}>
                  <Typography variant="accent" component="h3" fontSize="1.5rem">
                    {formatDate(date)}
                  </Typography>

                  <Typography
                    variant="accent"
                    fontSize="1.25rem"
                    component="span"
                  >
                    {formatTime(date)}
                  </Typography>
                </Box>
                {description &&
                  description.map((desc, i) => {
                    return (
                      <Typography
                        key={i}
                        fontSize="1rem"
                        variant="body2"
                        color="text.secondary"
                        pb={1}
                        sx={{ whiteSpace: "break-spaces" }}
                      >
                        {desc}
                      </Typography>
                    );
                  })}
                <Typography
                  variant="accent"
                  component="h3"
                  fontSize="1.125rem"
                  py={2}
                >
                  Tickets:{" "}
                  <Typography fontSize="1.125rem" component="span">
                    {ticketCost ? `$${ticketCost}` : `Free`}
                  </Typography>
                </Typography>
                <LinkButton
                  newWindow={true}
                  link={link}
                  text="Tickets & More Info"
                />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
