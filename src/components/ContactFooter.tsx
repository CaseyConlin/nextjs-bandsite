"use client";
import { usePathname } from "next/navigation";

import { Box, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import { YouTube } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";

export const ContactFooter = () => {
  const pathName = usePathname();
  console.log(pathName);
  return pathName === "/contact/" ? (
    <Box mt={10}></Box>
  ) : (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem",
        bgcolor: pathName === "/" ? "#27221D" : "transparent",

        // width: "100vw",
      }}
    >
      <Box bgcolor="#27221D" py="2rem">
        <Box>
          <Typography
            component={"h3"}
            variant="accent"
            fontSize={"1.5rem"}
            color={"#E2B164"}
            textAlign={"center"}
          >
            Drop Me a Line
          </Typography>
        </Box>
        <Box>
          <Typography
            component="p"
            fontSize={"1rem"}
            fontWeight="600"
            color="white"
            my={"1rem"}
            lineHeight={"1.75rem"}
            whiteSpace={"pre-wrap"}
            textAlign={"center"}
          >
            {`Booking a gig?\nHave a question about a song or album? \nReach out. I’d love to hear from you.`}
          </Typography>
        </Box>
        <Box my="1.5rem">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#E2B164"
            fontWeight="900"
            fontSize="1.125rem"
            sx={{ letterSpacing: ".125rem" }}
          ></Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#E2B164"
            fontWeight="900"
            fontSize="1.125rem"
            sx={{ letterSpacing: ".125rem" }}
          >
            <EmailIcon
              sx={{ fill: "#E2B164", fontSize: "2rem", marginRight: ".5rem" }}
            />
            <Typography variant="accent">
              <a target="_blank" href="mailto:mark@unclebuckle.com">
                mark@unclebuckle.com
              </a>
            </Typography>
          </Box>
        </Box>
        <Box
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
          <IconButton
            aria-label="facebook"
            component="a"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100069423533528"
          >
            <FacebookRounded style={{ fontSize: "3rem", fill: "#E2B164" }} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
