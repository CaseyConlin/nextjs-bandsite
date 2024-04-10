import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import amazonIcon from "../../../public/icons/Amazon_Music_logo.svg";
import appleMusicIcon from "../../../public/icons/applemusicicon.svg";
import spotifyIcon from "../../../public/icons/spotify.svg";
import pandoraIcon from "../../../public/icons/pandora-svgrepo-com.svg";
import albumIcon from "../../../public/icons/compact-disc-solid.svg";

import { LinkIconButton } from "./LinkIconButton";

// const linksAndIcons = {
//   apple: {
//     iconNextImage: appleMusicIcon,
//     link: "https://music.apple.com/us/album/uncle-buckle/195623163",
//     alt: "apple music icon",
//   },

//   amazon: {
//     iconNextImage: amazonIcon,
//     link: "https://www.amazon.com/music/player/albums/B0016QA3GI?_encoding=UTF8&qid=&sr=",
//     alt: "amazon music icon",
//   },

//   spotify: {
//     iconNextImage: spotifyIcon,
//     link: "https://open.spotify.com/album/0UFbKN0AsYXIKkmPM1rOl2",
//     alt: "spotify icon",
//   },

//   pandora: {
//     iconNextImage: pandoraIcon,
//     link: "https://www.pandora.com/artist/mark-brown/uncle-buckle/ALfPK7fqKsmZ7p2",
//     alt: "pandora icon",
//   },
//   album: {
//     iconNextImage: albumIcon,
//     link: "https://open.spotify.com/album/3dpQp6REq0OvjJjKBUzhzT",
//     alt: "purchase cd icon",
//   },
// };
export type StreamingStackProps = {
  left?: boolean;
  links?: {
    appleMusicLink?: string;
    amazonMusicLink?: string;
    spotifyLink?: string;
    pandoraLink?: string;
    cdLink?: string;
  };
};
export const StreamingStack = ({ left, links }: StreamingStackProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      my={3}
      justifyContent={left ? "flex-start" : "center"}
      alignContent="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        {links && links.appleMusicLink && (
          <LinkIconButton
            link={links.appleMusicLink}
            iconNextImage={appleMusicIcon}
            alt="apple music icon"
          />
        )}
        {links && links.amazonMusicLink && (
          <LinkIconButton
            link={links.amazonMusicLink}
            iconNextImage={amazonIcon}
            alt="amazon music link"
          />
        )}
        {links && links.spotifyLink && (
          <LinkIconButton
            link={links.spotifyLink}
            iconNextImage={spotifyIcon}
            alt="spotify link"
          />
        )}
        {links && links.pandoraLink && (
          <LinkIconButton
            link={links.pandoraLink}
            iconNextImage={pandoraIcon}
            alt="pandora link"
          />
        )}
        {links && links.cdLink && (
          <LinkIconButton
            link={links.cdLink}
            iconNextImage={albumIcon}
            alt="cd link"
          />
        )}
      </Box>
    </Stack>
  );
};
