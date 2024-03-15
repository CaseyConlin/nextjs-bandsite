"use client"; // This is a client component 👈🏽
import * as React from "react";
import { useState, useRef, useEffect } from "react";
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
import { music } from "@/data/music";
import { Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
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
  songName: string;
  album: string;
  albumCover: string;
  artist: string;
  file: string;
  duration: number;
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
  const [songTrack, setSongTrack] = useState(0);
  const [trackList, setTrackList] = useState([
    {
      songName: "",
      album: "",
      albumCover: "",
      artist: "",
      file: "",
      duration: 0,
    },
  ]);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    const track = songTrack == music.length - 1 ? 0 : songTrack + 1;
    setSongTrack(track);
  };
  const prevTrackHandler = () => {
    const track = songTrack == 0 ? music.length - 1 : songTrack - 1;
    setSongTrack(track);
  };

  useEffect(() => {
    async function getTrackDuration(file: string) {
      // const audioFile = new Blob(file, { type: "audio/mp3" });
      // const url = URL.createObjectURL(file);

      return new Promise((resolve) => {
        const audio = document.createElement("audio");
        audio.muted = true;
        const source = document.createElement("source");
        source.src = file; //--> blob URL
        audio.preload = "metadata";
        audio.appendChild(source);
        audio.onloadedmetadata = function () {
          resolve(audio.duration);
        };
      });
    }
    async function setDurations() {
      const tracks: track[] = [];
      let promises = music.map(async (song) => {
        return getTrackDuration(song.file).then((dur: any) => {
          song.duration = dur;
          //   tracks.push(song);
          // return song;
        });
        //   .then((newTrack) => {
        //     tracks.push(newTrack);
        //   })
        // .then(() => {
        //   return tracks;
        // })
      });
      Promise.all(promises).then(() => {
        setTrackList(music);
      });
    }
    setDurations();
    // setDurations().then((res: any) => {
    //   console.log(res);
    //   setTrackList(res);
    // });
  }, []);
  const playingTrackDuration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  const [volume, setVolume] = useState(50);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
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
        columnSpacing={2}
        p={3}
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

          backgroundColor: "rgba(255, 255, 255, 0.93)",
          backdropFilter: "blur(40px)",
        }}
      >
        <Grid2
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

              // onTimeUpdate={timeUpdate}
              // onDurationChange={durationHandler}
            />
            <Box display="flex" flexDirection="row" justifySelf="flex-start">
              <CoverImage>
                <Image alt="can't win - Chilling Sunday" src={happyHourCover} />
              </CoverImage>
              <Box sx={{ ml: 4, minWidth: 0, mt: 5 }}>
                <Typography fontWeight={500} fontSize="1.125rem">
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
              max={playingTrackDuration}
              onChange={(_, value) => setPosition(value as number)}
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
              <TinyText>
                -{formatDuration(playingTrackDuration - position)}
              </TinyText>
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
          md={4}
          sx={{
            borderRadius: "25px",
            backgroundColor: "rgba(235, 235, 235, 0.85)",
            p: 4,
          }}
        >
          <Box>
            {trackList.length > 1 &&
              trackList.map((song, index) => {
                // console.log(song);
                return (
                  <Grid2
                    key={song.songName + index}
                    container
                    justifyContent="space-around"
                  >
                    <Grid2 md={4}>{song.songName}</Grid2>
                    <Grid2 md={4}>{song.album}</Grid2>
                    <Grid2 md={4}>{song.duration}</Grid2>
                  </Grid2>
                );
              })}
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};
