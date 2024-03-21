import { styled, useTheme } from "@mui/material/styles";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import happyHourCover from "../../../public/markbrownhappyhourcover.png";

const CoverImage = styled("div")({
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 25,
  position: "relative",

  //   backgroundColor: "rgba(0,0,0,0.08)",
  //   "& > img": {
  //     width: "100%",
  //   },
});

export type TrackInfoContainerProps = {
  trackArtist: string;
  trackName: string;
  trackAlbum: string;
  trackAlbumImage: string;
};

export const TrackInfoContainer = ({
  trackArtist,
  trackName,
  trackAlbum,
  trackAlbumImage,
}: TrackInfoContainerProps) => {
  return (
    <Box display="flex" flexDirection="row" justifySelf="flex-start">
      <CoverImage
        sx={{
          width: { xs: "150px", md: "200px" },
          height: { xs: "150px", md: "200px" },
        }}
      >
        <Image
          // width={200}
          // height={200}
          // width={0}
          // height={0}

          fill
          // style={{ borderRadius: "25px" }}
          style={{ objectFit: "contain" }}
          alt="can't win - Chilling Sunday"
          src={`/${trackAlbumImage}`}
        />
      </CoverImage>

      <Box sx={{ ml: 4, minWidth: 0, mt: 5 }}>
        <Typography
          fontWeight={400}
          sx={{ fontSize: { xs: "1rem", sm: "1.125rem" } }}
        >
          {trackArtist}
        </Typography>
        <Typography fontSize="1.125rem">
          <b> {trackName}</b>
        </Typography>
        <Typography fontSize="1.125rem">{trackAlbum}</Typography>
      </Box>
    </Box>
  );
};
