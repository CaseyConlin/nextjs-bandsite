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
import happyHourCover from "../../public/markbrownhappyhourcover.png";
import uncleBuckleCover from "../../public/Unkle-Buckle-cover.jpg";

import emotionStyled from "@emotion/styled";
import { roboto } from "../app/fonts";

import { music } from "@/data/music";
import { Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { isPageStatic } from "next/dist/build/utils";
import { Height } from "@mui/icons-material";
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
  width: "215px",
  height: "215px",
  objectFit: "scale-down",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 25,
  //   backgroundColor: "rgba(0,0,0,0.08)",
  //   "& > img": {
  //     width: "100%",
  //   },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
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

  useEffect(() => {
    async function getTrackDuration(file: string) {
      return new Promise((resolve) => {
        const audio = document.createElement("audio");
        audio.muted = true;
        const source = document.createElement("source");
        source.src = file;
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

    if (audioRef.current) {
      audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
      setIsPlaying(false);
    }
  }, [isPlaying]);

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
      sx={{ display: "flex", justifyContent: "center", background: "#27221D" }}
    >
      <Grid2
        container
        columnSpacing={3}
        p={3}
        px=""
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1230px",
          //   height: "527px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "25px",
          marginTop: "-100px",
          position: "relative",
          //   maxHeight: "60vh",

          backgroundColor: "rgba(255, 255, 255, 0.93)",
          backdropFilter: "blur(40px)",
        }}
      >
        <Grid2
          pr={5}
          xs={12}
          md={7}
          sx={{
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
              src={`/${music[songTrack].file}`}
              onTimeUpdate={timeUpdate}
              onDurationChange={durationHandler}
            />
            <Box display="flex" flexDirection="row" justifySelf="flex-start">
              <Image
                width={215}
                height={215}
                style={{ borderRadius: "25px" }}
                alt="can't win - Chilling Sunday"
                src={happyHourCover}
              />

              <Box sx={{ ml: 4, minWidth: 0, mt: 5 }}>
                <Typography
                  fontWeight={500}
                  fontSize="1.125rem"
                  className={roboto.className}
                >
                  {music[songTrack].artist}
                </Typography>
                <Typography fontSize="1.125rem" className={roboto.className}>
                  <b> {music[songTrack].songName}</b>
                </Typography>
                <Typography fontSize="1.125rem" className={roboto.className}>
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
              //   max={playingTrackDuration}
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
              sx={{ mb: 1, px: 1, maxWidth: 350, width: "100%" }}
              alignItems="center"
            >
              <VolumeDownRounded />
              <Slider
                aria-label="Volume"
                onChange={volumeHandler}
                defaultValue={30}
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
          </Widget>
        </Grid2>
        <Grid2
          md={5}
          sx={{
            borderRadius: "25px",
            backgroundColor: "rgba(211, 207, 207, 0.3)",

            alignSelf: "stretch",
            height: "45vh",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              height: "100%",
              overflow: "hidden",
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {trackList.length > 1 &&
              trackList.map((song, index) => {
                return (
                  <Grid2
                    key={song.songName + index}
                    container
                    columnSpacing={1}
                    rowSpacing={2}
                    justifyContent="space-around"
                    pr={3}
                    pt={1}
                    onClick={() => songClickHandler(song.trackNum)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Grid2
                      md={1}
                      display="flex"
                      mt={0.35}
                      justifyContent="center"
                    >
                      {music[songTrack].file === song.file && !paused ? (
                        <VolumeUpRounded sx={{ fontSize: "1rem" }} />
                      ) : (
                        ""
                      )}
                    </Grid2>
                    <Grid2 md={5}>
                      <Typography
                        fontSize=".875rem"
                        className={roboto.className}
                      >
                        {song.songName}
                      </Typography>
                    </Grid2>
                    <Grid2 md={4} sx={{ textAlign: "center" }}>
                      <Typography
                        fontSize=".875rem"
                        className={roboto.className}
                      >
                        {song.album}
                      </Typography>
                    </Grid2>
                    <Grid2 md={2} sx={{ textAlign: "right" }}>
                      <Typography
                        fontSize=".875rem"
                        className={roboto.className}
                      >
                        {song.duration}
                      </Typography>
                    </Grid2>
                  </Grid2>
                );
              })}
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};
