import axios from 'axios';

const API_URL = 'http://localhost:8080/';


// Create Axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});