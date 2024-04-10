import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <Container maxWidth="xl">
      <Typography
        component="h1"
        variant="accent"
        color="white"
        pt={18}
        pl={2}
        fontSize="3rem"
        sx={{
          textShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        Well, shoot...
      </Typography>
      <Box
        component="div"
        sx={{
          m: { xs: 1, sm: 2 },
          p: 2,
          py: 3,
          maxWidth: { xs: "xs", md: "xl" },
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,85%)",
          fontSize: "1rem",
        }}
      >
        <Typography fontWeight="600" fontSize="1.25rem" mt={2}>
          We don&apos;t have a page at this address.
        </Typography>
        <Typography fontSize="1.25rem" mt={2}>
          Maybe head back to the home page and start over.
        </Typography>
        <Box my={3}>
          <LinkButton text={"Take Me Home"} link={"/"} />
        </Box>
      </Box>
    </Container>
    // <>
    //   <Typography
    //     component="h1"
    //     variant="accent"
    //     color="white"
    //     pt={18}
    //     pl={2}
    //     fontSize="3rem"
    //     sx={{
    //       textShadow:
    //         "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    //     }}
    //   >
    //     Well, shoot...
    //   </Typography>
    //   <div>
    //     <h2>Not Found</h2>
    //     <p>Could not find requested resource</p>
    //     <Link href="/">Return Home</Link>
    //   </div>
    // </>
  );
}
