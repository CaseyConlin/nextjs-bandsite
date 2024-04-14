"use client";

import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";

import emotionStyled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

import { music } from "@/data/music";
import { albums } from "@/data/albums";

import { TrackListItem } from "./trackListItem";
import { StreamingStack } from "../ui/StreamingStack";
import { VolumeControl } from "./VolumeControl";
import { TimeControl } from "./TimeControl";
import { TrackControls } from "./TrackControls";
import { TrackInfoContainer } from "./TrackInfoContainer";
import { LinearLoading } from "../ui/LinearLoading";

// import { setDurations } from "@/utilities/utilities";

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
export type trackType = {
  trackNum: number;
  songName: string;
  album: string;
  albumCover: string;
  artist: string;
  file: string;
  duration: string;
};

export type AudioPlayerProps = {
  homepage?: boolean;
  album?: string;
};
export const AudioPlayer = ({
  homepage,
  album = "Happy Hour",
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(true);
  const [volume, setVolume] = useState(50);
  const [songTrack, setSongTrack] = useState(0);
  const [trackList, setTrackList] = useState<trackType[] | undefined>();

  const audioRef = useRef<HTMLAudioElement>(null);
  const trackListItemRef = useRef<HTMLDivElement>(null);

  const tracks = music.filter((track) => {
    return track.album == album;
  });

  const albumLinks = albums.find((linkAlbum) => {
    return linkAlbum.title == album;
  });

  const links = albumLinks?.links ? albumLinks.links : undefined;

  useEffect(() => {
    // setDurations(tracks).then((res) => {
    setTrackList(tracks);
    // });
    // durationHandler();
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
    const track = songTrack == tracks.length - 1 ? 0 : songTrack + 1;

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
    const track = songTrack == 0 ? tracks.length - 1 : songTrack - 1;
    setSongTrack(track);
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
    tracks.length > 0 && (
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          background: homepage ? "#27221D" : "",
          // position: "relative",

          // height: { xs: "50vh", sm: "50vh", md: "25vh" },
        }}
      >
        <Grid
          container
          maxWidth={"xl"}
          columnSpacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1230px",
            padding: { xs: 1, sm: 3 },
            zIndex: 12,
            //   height: "527px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "25px",
            marginTop: homepage ? { xs: "-30vh", lg: 0 } : "",
            position: "relative",
            //   maxHeight: "60vh",
            // alignItems: "center",
            flexWrap: "nowrap",
            alignItems: "stretch",
            backgroundColor: "rgba(255, 255, 255, 0.93)",
            backdropFilter: "blur(40px)",
            height: { xs: "60vh", sm: "480px" },
          }}
        >
          <Grid
            xs={12}
            sm={7}
            sx={{
              // pr: { sm: 5 },
              display: "flex",
              alignContent: "flex-start",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Widget>
              <audio
                ref={audioRef}
                src={`/music/${tracks[songTrack].file}`}
                onTimeUpdate={timeUpdate}
                onDurationChange={durationHandler}
              />
              <TrackInfoContainer
                trackArtist={tracks[songTrack].artist}
                trackName={tracks[songTrack].songName}
                trackAlbum={tracks[songTrack].album}
                trackAlbumImage={tracks[songTrack].albumCover}
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
              <VolumeControl
                volumeValue={volume}
                volumeHandler={volumeHandler}
              />
              {links && <StreamingStack links={links} />}
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
              {trackList ? (
                trackList.map((song) => {
                  return (
                    <TrackListItem
                      key={song.songName + song.trackNum}
                      track={song}
                      trackPlaying={
                        tracks[songTrack].file === song.file && !paused
                          ? true
                          : false
                      }
                      currentTrack={songTrack == song.trackNum - 1}
                      onclick={songClickHandler}
                      ref={trackListItemRef}
                    />
                  );
                })
              ) : (
                <LinearLoading />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  );
};
