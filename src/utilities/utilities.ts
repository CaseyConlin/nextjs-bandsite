import { track } from "@/components/audioplayer/AudioPlayer";
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

function formatDuration(value: number) {
  const minute = Math.floor(value / 60);
  const secondLeft = Math.floor(value - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}
export const setDurations = async (tracks: track[]) => {
  let updatedList: track[] = [];

  let promises = tracks.map(async (track: track) => {
    return await getTrackDuration(track.file).then((dur) => {
      track.duration = formatDuration(Number(dur));
      updatedList.push(track);
    });
  });
  let newList = await Promise.all(promises).then(() => {
    return updatedList;
  });
  return newList;
};
