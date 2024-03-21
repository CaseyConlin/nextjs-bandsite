import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import amazonIcon from "../../../public/icons/Amazon_Music_logo.svg";
import appleMusicIcon from "../../../public/icons/applemusicicon.svg";
import spotifyIcon from "../../../public/icons/spotify.svg";
import pandoraIcon from "../../../public/icons/pandora-svgrepo-com.svg";
import { LinkIconButton } from "./LinkIconButton";

const linksAndIcons = [
  {
    iconNextImage: appleMusicIcon,
    link: "https://music.apple.com/us/album/uncle-buckle/195623163",
    alt: "apple music icon",
  },

  {
    iconNextImage: amazonIcon,
    link: "https://www.amazon.com/music/player/albums/B0016QA3GI?_encoding=UTF8&qid=&sr=",
    alt: "amazon music icon",
  },

  {
    iconNextImage: spotifyIcon,
    link: "https://open.spotify.com/album/0UFbKN0AsYXIKkmPM1rOl2",
    alt: "spotify icon",
  },

  {
    iconNextImage: pandoraIcon,
    link: "https://www.pandora.com/artist/mark-brown/uncle-buckle/ALfPK7fqKsmZ7p2",
    alt: "pandora icon",
  },
];
export const StreamingStack = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      my={3}
      justifyContent="center"
      alignContent="center"
    >
      {linksAndIcons &&
        linksAndIcons.map((link) => {
          return (
            <Box
              key={link.link}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <LinkIconButton
                link={link.link}
                iconNextImage={link.iconNextImage}
                alt={link.alt}
              />
            </Box>
          );
        })}
    </Stack>
  );
};
