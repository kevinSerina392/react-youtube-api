import axios from "axios";

const KEY = "AIzaSyDvc2jszm7bEn40AONiBeqxbtxKAYDaLu8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`,
  },
});
