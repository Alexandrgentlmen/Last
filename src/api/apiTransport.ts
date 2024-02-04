import axios from 'axios';
import { BASE_URL, DEFAULT_HEADERS, KEY_TOKEN } from './const';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { ...DEFAULT_HEADERS },
});

export const axiosInstanceWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: { ...DEFAULT_HEADERS },
});

axiosInstanceWithAuth.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(KEY_TOKEN) ?? '';

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
