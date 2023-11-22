import axios from 'axios';

const apiUrl = process.env.API_URL;

export default axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});