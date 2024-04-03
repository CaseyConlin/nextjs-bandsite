function formatDuration(value: number) {
  const minute = Math.floor(value / 60);
  const secondLeft = Math.floor(value - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

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

const setDurations = async (music: any) => {
  let promises = music.map(async (song: any) => {
    return getTrackDuration(song.file).then((dur: any) => {
      song.duration = formatDuration(Number(dur));
    });
  });
  Promise.all(promises).then(() => {
    // setTrackList(music);
    return music;
  });
};
export const getTracks = async (music: any) => {
  let musicTracks = await setDurations(music);
  return musicTracks;
};
// durationHandler();
