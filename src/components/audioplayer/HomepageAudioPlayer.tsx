"use client";

import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

import emotionStyled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { music } from "@/data/music";

import { TrackListItem } from "./trackListItem";
import { StreamingStack } from "../ui/StreamingStack";
import { VolumeControl } from "./VolumeControl";
import { TimeControl } from "./TimeControl";
import { TrackControls } from "./TrackControls";
import { TrackInfoContainer } from "./TrackInfoContainer";

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

export const HomepageAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(50);
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
    const getTrackDuration = async (file: string) => {
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
    };

    const setDurations = async () => {
      let promises = music.map(async (song) => {
        return getTrackDuration(song.file).then((dur: any) => {
          song.duration = formatDuration(Number(dur));
        });
      });
      Promise.all(promises).then(() => {
        setTrackList(music);
        return music;
      });
    };

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

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const volumeHandler = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
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
      <Grid
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
        <Grid
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
              src={`/music/${music[songTrack].file}`}
              onTimeUpdate={timeUpdate}
              onDurationChange={durationHandler}
            />
            <TrackInfoContainer
              trackArtist={music[songTrack].artist}
              trackName={music[songTrack].songName}
              trackAlbum={music[songTrack].album}
              trackAlbumImage={music[songTrack].albumCover}
            />
            <TrackControls
              paused={paused}
              playPauseHandler={playPauseHandler}
              prevTrackHandler={prevTrackHandler}
              nextTrackHandler={nextTrackHandler}
            />
            <TimeControl
              position={position}
              duration={duration}
              formatDuration={formatDuration}
              scrubTimeHandler={scrubTimeHandler}
            />
            <VolumeControl volumeValue={volume} volumeHandler={volumeHandler} />
            <StreamingStack />
          </Widget>
        </Grid>
        <Grid
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
              })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
