import { trackType } from "@/components/audioplayer/AudioPlayer";

const getTrackDuration = async (file: string) => {
  return new Promise((resolve) => {
    const audio = document.createElement("audio");
    audio.muted = true;
    const source = document.createElement("source");
    source.src = "/music/" + file;
    audio.preload = "metadata";
    audio.appendChild(source);
    audio.onloadedmetadata = function () {
      return resolve(audio.duration);
    };
  });
};

const formatDuration = (value: number) => {
  const minute = Math.floor(value / 60);
  const secondLeft = Math.floor(value - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
};

export const setDurations = async (tracks: trackType[]) => {
  let updatedList: trackType[] = [];

  let promises = tracks.map(async (track: trackType) => {
    return await getTrackDuration(track.file).then((dur) => {
      track.duration = formatDuration(Number(dur));
      updatedList.push(track);
    });
  });

  let newList = await Promise.all(promises).then(() => {
    updatedList.sort((a, b) => a.trackNum - b.trackNum);
    return updatedList;
  });

  return newList;
};

export const formatDate = (date: string) => {
  const formatted = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  return formatted;
};

export const formatTime = (date: string) => {
  const formatted = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return formatted;
};
