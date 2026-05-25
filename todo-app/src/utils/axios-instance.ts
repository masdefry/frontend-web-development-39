import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKENDLESS_API_URL}/${import.meta.env.VITE_BACKENDLESS_APPLICATION_ID}/${import.meta.env.VITE_BACKENDLESS_API_KEY}/`,
});

export default axiosInstance;