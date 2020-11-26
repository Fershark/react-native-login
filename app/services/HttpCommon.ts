import axios from 'axios';

export default axios.create({
  baseURL: 'https://demo.fisheriesapp.com/api/mobile',
  headers: {
    Accept: 'application/json',
  },
});
