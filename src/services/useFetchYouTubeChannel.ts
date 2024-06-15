import { useEffect, useState } from "react";
import { ChannelDataType } from "@/app/videos/page";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = "https://www.googleapis.com/youtube/v3";
const channelID = "UCJzQ4krap2qE6JBMbS_IRmg";
const playlistID = "UUJzQ4krap2qE6JBMbS_IRmg";

import { videos } from "@/data/videos";
// const playlistID = "UUpRmvjdu3ixew5ahydZ67uA";
// const playlistID = "UU6lim77xHQQ9Tio9e_ydxEw"; //test channelID with addtional videos
// export type videoResponseItemType = {
//   title: string;
//   description?: string;
//   source: string;
//   resourceId: { videoId: string };
// };
// export type videoResponseType = {
//   snippet: videoResponseItemType;
// };

export const useFetchYouTubeChannel = (apiUrl: string) => {
  const [profileData, setProfileData] = useState<ChannelDataType>();
  useEffect(() => {
    fetch(`${apiUrl}/channels?part=snippet&id=${channelID}&key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const dataItemSnippet = data.items[0].snippet;
        setProfileData({
          profileTitle: dataItemSnippet.title,
          profileImage: dataItemSnippet.thumbnails.medium.url,
        });
      });
  }, []);

  return profileData;
  // return profileData;
};

// export const fetchVideosByChannelID = async () => {
//   const videoList: VideoPlayerProps[] = [];
//   const response = await fetch(
//     `${apiUrl}/playlistItems?part=id,snippet,contentDetails&playlistId=${playlistID}&key=${apiKey}`
//   );

//   const data = await response.json();

//   data.items.map((item: videoResponseType) => {
//     const dataItemSnippet: videoResponseItemType = item.snippet;
//     const videoItem = {
//       title: dataItemSnippet.title,
//       description: dataItemSnippet.description,
//       source: dataItemSnippet.resourceId.videoId,
//     };
//     videoList.push(videoItem);
//   });

//   videoList.push(...videos);

//   return videoList;
// };
