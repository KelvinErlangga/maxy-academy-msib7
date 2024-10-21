import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  params: {
    api_key: process.env.NEXT_PUBLIC_APIKEY,
  },
});

export default instance;
