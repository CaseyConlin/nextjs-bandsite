import { ChannelDataType } from "@/app/videos/page";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = "https://www.googleapis.com/youtube/v3";
const channelID = "UCJzQ4krap2qE6JBMbS_IRmg";
const playlistID = "UUJzQ4krap2qE6JBMbS_IRmg";
// const playlistID = "UUpRmvjdu3ixew5ahydZ67uA";
// const playlistID = "UU6lim77xHQQ9Tio9e_ydxEw"; //test channelID with addtional videos

export const fetchVideoChannelInfo = async (): Promise<ChannelDataType> => {
  const response = await fetch(
    `${apiUrl}/channels?part=snippet&id=${channelID}&key=${apiKey}`
  );
  const data = await response.json();

  const dataItemSnippet = data.items[0].snippet;
  const profileData = {
    profileTitle: dataItemSnippet.title,
    profileImage: dataItemSnippet.thumbnails.medium.url,
  };

  return profileData;
};

export const fetchVideosByChannelID = async () => {
  const videoList: VideoPlayerProps[] = [];
  const response = await fetch(
    `${apiUrl}/playlistItems?part=id,snippet,contentDetails&playlistId=${playlistID}&key=${apiKey}`
  );

  const data = await response.json();

  data.items.map((item: any) => {
    const dataItemSnippet = item.snippet;
    const videoItem = {
      title: dataItemSnippet.title,
      description: dataItemSnippet.description,
      source: dataItemSnippet.resourceId.videoId,
    };
    videoList.push(videoItem);
  });

  return videoList;
};
