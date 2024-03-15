import { Box, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { YouTube } from "@mui/icons-material";
import { blackHanSans, roboto } from "../app/fonts";

export const ContactFooter = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem",
        bgcolor: "black",
        // width: "100vw",
      }}
    >
      <Box bgcolor="#27221D" py="2rem">
        <Box>
          <Typography
            component={"h3"}
            className={blackHanSans.className}
            // fontFamily={"Black Han Sans"}
            fontSize={"1.5rem"}
            color={"#E2B164"}
            textAlign={"center"}

            // my={"1rem"}
          >
            Drop Me a Line
          </Typography>
        </Box>
        <Box>
          <Typography
            component="p"
            className={roboto.className}
            fontSize={"1rem"}
            fontWeight="600"
            color="white"
            my={"1rem"}
            lineHeight={"1.75rem"}
            whiteSpace={"pre-wrap"}
            textAlign={"center"}
          >
            {`Booking a gig?\nHave a question about a song or CD? \nReach out. I’d love to hear from you.`}
          </Typography>
        </Box>
        <Box my="1.5rem">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#E2B164"
            className={roboto.className}
            fontWeight="900"
            fontSize="1.125rem"
            sx={{ letterSpacing: ".125rem" }}
          >
            <PhoneIphoneIcon sx={{ fill: "#E2B164", fontSize: "2rem" }} />{" "}
            <a target="_blank" href="tel:845-616-0579">
              845 616 0579
            </a>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#E2B164"
            className={roboto.className}
            fontWeight="900"
            fontSize="1.125rem"
            sx={{ letterSpacing: ".125rem" }}
          >
            <EmailIcon
              sx={{ fill: "#E2B164", fontSize: "2rem", marginRight: ".5rem" }}
            />
            <a target="_blank" href="mailto:mark@unclebuckle.com">
              mark@unclebuckle.com
            </a>
          </Box>
        </Box>
        <Box
          // mt={"2rem"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100vw",
          }}
        >
          <IconButton
            aria-label="youtube"
            component="a"
            target="_blank"
            href="https://www.youtube.com/channel/UCJzQ4krap2qE6JBMbS_IRmg"
          >
            <YouTube style={{ fontSize: "3rem", fill: "#E2B164" }} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
