import axios from 'axios';

const http = axios.create({
  baseURL: 'https://demo.fisheriesapp.com/api/mobile',
  headers: {
    Accept: 'application/json',
  },
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'Network Error';
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    return Promise.reject(new Error(message));
  },
);

export default http;
