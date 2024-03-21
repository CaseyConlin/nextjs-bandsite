"use client"; // This is a client component 👈🏽
import * as React from "react";
import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import Image from "next/image";
import happyHourCover from "../../../public/markbrownhappyhourcover.png";
import uncleBuckleCover from "../../../public/Unkle-Buckle-cover.jpg";
import amazonIcon from "../../../public/icons/Amazon_Music_logo.svg";
import appleMusicIcon from "../../../public/icons/applemusicicon.svg";
import spotifyIcon from "../../../public/icons/spotify.svg";
import pandoraIcon from "../../../public/icons/pandora-svgrepo-com.svg";

import emotionStyled from "@emotion/styled";
import { roboto } from "../../app/fonts";

import { music } from "@/data/music";
import { Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { isPageStatic } from "next/dist/build/utils";
import { Height } from "@mui/icons-material";
import { TrackListItem } from "./trackListItem";
const Widget = emotionStyled("div")(({ theme }) => ({
  //   padding: 16,
  borderRadius: "25px",
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  display: "flex",

  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  //   alignItems: "center",

  //   backgroundColor: "rgba(255,255,255,0.4)",
  //   backdropFilter: "blur(40px)",
}));
export type track = {
  trackNum: number;
  songName: string;
  album: string;
  albumCover: string;
  artist: string;
  file: string;
  duration: string;
};
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

const TinyText = styled(Typography)({
  fontSize: "0.95rem",
  marginTop: "10px",
  marginLeft: "10px",
  marginRight: "10px",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "black",
});

export const HomepageAudioPlayer = () => {
  const [albumImage, setAlbumImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const [songTrack, setSongTrack] = useState(0);
  const [trackList, setTrackList] = useState([
    {
      trackNum: 1,
      songName: "",
      album: "",
      albumCover: "",
      artist: "",
      file: "",
      duration: "0",
    },
  ]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const trackListItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getTrackDuration(file: string) {
      return new Promise((resolve) => {
        const audio = document.createElement("audio");
        audio.muted = true;
        const source = document.createElement("source");
        source.src = "/music/" + file;
        audio.preload = "metadata";
        audio.appendChild(source);
        audio.onloadedmetadata = function () {
          resolve(audio.duration);
        };
      });
    }

    async function setDurations() {
      let promises = music.map(async (song) => {
        return getTrackDuration(song.file).then((dur: any) => {
          song.duration = formatDuration(Number(dur));
        });
      });
      Promise.all(promises).then(() => {
        setTrackList(music);
      });
    }

    setDurations();
    durationHandler();
  }, []);

  const playPauseHandler = () => {
    paused ? setPaused(false) : setPaused(true);
    // setPaused(!paused);

    if (audioRef.current) {
      audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
    }
  };

  const nextTrackHandler = () => {
    if (audioRef.current) {
      audioRef.current.paused ? setIsPlaying(false) : setIsPlaying(true);
    }
    const track = songTrack == music.length - 1 ? 0 : songTrack + 1;

    setSongTrack(track);
  };
  const prevTrackHandler = () => {
    if (audioRef.current) {
      audioRef.current.paused ? setIsPlaying(false) : setIsPlaying(true);
    }
    if (position > 1) {
      if (audioRef.current) {
        return (audioRef.current.currentTime = 0);
      }
    }
    const track = songTrack == 0 ? music.length - 1 : songTrack - 1;
    setSongTrack(track);

    // if (audioRef.current) {
    //   audioRef.current.paused
    //     ? audioRef.current.play()
    //     : audioRef.current.pause();
    // }
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
      setIsPlaying(false);
    }
  }, [nextTrackHandler, prevTrackHandler]);

  useEffect(() => {
    if (
      audioRef.current &&
      Math.floor(audioRef.current.currentTime) >=
        Math.floor(audioRef.current.duration)
    ) {
      nextTrackHandler();
      audioRef.current.onloadeddata = () => {
        if (audioRef.current) audioRef.current.play();
      };
    }
  });

  useEffect(() => {
    if (trackListItemRef.current) {
      trackListItemRef.current.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [songTrack]);

  const durationHandler = () => {
    if (audioRef.current) {
      setDuration(Math.floor(audioRef.current.duration));
    }
  };

  const timeUpdate = useCallback(
    (event: ChangeEvent<HTMLAudioElement>) => {
      setPosition(Math.floor(event.currentTarget.currentTime));
      event.currentTarget.paused ? setPaused(true) : setPaused(false);
      console.log(paused);
    },

    [setPosition]
  );

  const scrubTimeHandler = (_: Event, newValue: number | number[]) => {
    // event;
    console.log(newValue);
    if (typeof newValue === "number") {
      setPosition(newValue);

      if (audioRef.current) {
        audioRef.current.currentTime = newValue;
      }
    }
  };

  const songClickHandler = (trackNum: number) => {
    setSongTrack(trackNum - 1);
    if (audioRef.current) {
      audioRef.current.onloadeddata = () => {
        if (audioRef.current) audioRef.current.play();
      };
    }
  };

  //   const playingTrackDuration = 200; // seconds
  //   const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(50);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const volumeHandler = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      event;
      setVolume(newValue);

      if (audioRef.current) {
        audioRef.current.volume = newValue / 100;
      }
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "#27221D",
        // height: { xs: "50vh", sm: "50vh", md: "25vh" },
      }}
    >
      <Grid2
        container
        columnSpacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1230px",
          padding: { xs: 1, sm: 3 },
          //   height: "527px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "25px",
          marginTop: "-100px",
          position: "relative",
          //   maxHeight: "60vh",
          // alignItems: "center",
          flexWrap: "nowrap",
          alignItems: "stretch",
          backgroundColor: "rgba(255, 255, 255, 0.93)",
          backdropFilter: "blur(40px)",
          height: { xs: "60vh", sm: "40vh", md: "60vh" },
        }}
      >
        <Grid2
          xs={12}
          sm={7}
          sx={{
            pr: { sm: 5 },
            display: "flex",
            alignContent: "flex-start",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Widget>
            <audio
              ref={audioRef}
              //   src="/scratch.mp3"
              src={`/music/${music[songTrack].file}`}
              onTimeUpdate={timeUpdate}
              onDurationChange={durationHandler}
            />
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
                  src={happyHourCover}
                />
              </CoverImage>

              <Box sx={{ ml: 4, minWidth: 0, mt: 5 }}>
                <Typography
                  fontWeight={400}
                  sx={{ fontSize: { xs: "1rem", sm: "1.125rem" } }}
                >
                  {music[songTrack].artist}
                </Typography>
                <Typography fontSize="1.125rem">
                  <b> {music[songTrack].songName}</b>
                </Typography>
                <Typography fontSize="1.125rem">
                  {music[songTrack].album}
                </Typography>
              </Box>
            </Box>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => scrubTimeHandler(_, value as number)}
              sx={{
                color: "rgba(0,0,0,0.87)",
                height: 4,

                "& .MuiSlider-thumb": {
                  pointerEvents: "none",

                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&::before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
              }}
            >
              <TinyText>{formatDuration(position)}</TinyText>
              <TinyText>-{formatDuration(duration - position)}</TinyText>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
              }}
            >
              <IconButton
                aria-label="previous song"
                onClick={() => prevTrackHandler()}
              >
                <FastRewindRounded fontSize="large" sx={{ fill: "black" }} />
              </IconButton>
              <IconButton
                aria-label={paused ? "play" : "pause"}
                onClick={() => playPauseHandler()}
              >
                {paused ? (
                  <PlayArrowRounded sx={{ fontSize: "3rem", fill: "black" }} />
                ) : (
                  <PauseRounded sx={{ fontSize: "3rem", fill: "black" }} />
                )}
              </IconButton>
              <IconButton
                aria-label="next song"
                onClick={() => nextTrackHandler()}
              >
                <FastForwardRounded fontSize="large" sx={{ fill: "black" }} />
              </IconButton>
            </Box>
            <Stack
              alignSelf="center"
              spacing={2}
              direction="row"
              sx={{
                display: { xs: "none", sm: "flex" },
                mb: 1,
                px: 1,
                maxWidth: 350,
                width: "100%",
              }}
              alignItems="center"
            >
              <VolumeDownRounded />
              <Slider
                aria-label="Volume"
                onChange={volumeHandler}
                defaultValue={30}
                value={volume}
                sx={{
                  color: "rgba(0,0,0,0.87)",
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#fff",
                    "&::before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
              <VolumeUpRounded />
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              my={3}
              justifyContent="center"
              alignContent="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  target="_blank"
                  href="https://music.apple.com/us/album/uncle-buckle/195623163"
                >
                  <Image
                    width={35}
                    src={appleMusicIcon}
                    alt="apple music icon"
                  />
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  target="_blank"
                  href="https://www.amazon.com/music/player/albums/B0016QA3GI?_encoding=UTF8&qid=&sr="
                >
                  <Image width={35} src={amazonIcon} alt="amazon music icon" />
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  target="_blank"
                  href="https://open.spotify.com/album/0UFbKN0AsYXIKkmPM1rOl2"
                >
                  <Image width={35} src={spotifyIcon} alt="spotify icon" />
                </IconButton>
              </Box>{" "}
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  target="_blank"
                  href="https://www.pandora.com/artist/mark-brown/uncle-buckle/ALfPK7fqKsmZ7p2"
                >
                  <Image width={35} src={pandoraIcon} alt="pandora icon" />
                </IconButton>
              </Box>
            </Stack>
          </Widget>
        </Grid2>
        <Grid2
          sm={5}
          sx={{
            display: { xs: "none", sm: "flex" },
            borderRadius: "25px",
            backgroundColor: "rgba(211, 207, 207, 0.3)",
            alignSelf: "stretch",
            alignContent: "center",
            // height: { xs: "50vh", sm: "30vh", md: "25vh" },
          }}
        >
          <Box
            sx={{
              alignItems: "stretch",
              // height: "100%",

              overflow: "hidden",
              overflowY: "auto",
              scrollbarWidth: "thin",
              width: "100%",
            }}
          >
            {trackList.length > 1 &&
              trackList.map((song) => {
                return (
                  <TrackListItem
                    key={song.songName + song.trackNum}
                    track={song}
                    trackPlaying={
                      music[songTrack].file === song.file && !paused
                        ? true
                        : false
                    }
                    currentTrack={songTrack == song.trackNum - 1}
                    onclick={songClickHandler}
                    ref={trackListItemRef}
                  />
                );
                // <Grid2
                //   key={song.songName + index}
                //   container
                //   columnSpacing={1}
                //   rowSpacing={2}
                //   justifyContent="space-around"
                //   pr={3}
                //   pt={1}
                //   onClick={() => songClickHandler(song.trackNum)}
                //   sx={{ cursor: "pointer" }}
                // >
                //   <Grid2
                //     sm={1}
                //     display="flex"
                //     mt={0.25}
                //     justifyContent="center"
                //   >
                //     {music[songTrack].file === song.file && !paused ? (
                //       <VolumeUpRounded sx={{ fontSize: "1.25rem" }} />
                //     ) : (
                //       ""
                //     )}
                //   </Grid2>
                //   <Grid2 sm={5}>
                //     <Typography
                //       fontSize=".875rem"
                //
                //     >
                //       {song.songName}
                //     </Typography>
                //   </Grid2>
                //   <Grid2 sm={4} sx={{ textAlign: "center" }}>
                //     <Typography
                //       fontSize=".875rem"
                //
                //     >
                //       {song.album}
                //     </Typography>
                //   </Grid2>
                //   <Grid2 sm={2} sx={{ textAlign: "right" }}>
                //     <Typography
                //       fontSize=".875rem"
                //
                //     >
                //       {song.duration}
                //     </Typography>
                //   </Grid2>
                // </Grid2>
              })}
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};
