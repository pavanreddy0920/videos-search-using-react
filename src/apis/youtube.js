import axios from 'axios';

const KEY = 'AIzaSyDBW-p6kf8z-kRnhmOn4dvpJm56XNYCJOQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
