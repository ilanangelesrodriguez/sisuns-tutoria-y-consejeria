import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'public/v1/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
