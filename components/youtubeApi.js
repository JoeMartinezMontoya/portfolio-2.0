const API_KEY = 'AIzaSyDAsdfnUbSor6vTjLN9FJv4ZtnQwwi-24c';
const CHANNEL_ID = 'UCJ_5uFCIe3VYQFvALFdiL0Q';

export async function getLatestVideo() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=1`
  );
  const data = await response.json();
  if (data.items.length > 0) {
    const { videoId } = data.items[0].id;
    const { url } = data.items[0].snippet.thumbnails.default;
    return { videoId, thumbnail: url };
  }
  throw new Error('No videos found!');
}
