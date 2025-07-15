import axios from 'axios';

const API_BASE = 'http://localhost:3000'; // Change to your backend URL if different

export const createShortUrl = async (urlData) => {
  const response = await axios.post(`${API_BASE}/shorten`, urlData);
  return response.data;
};

export const fetchStats = async () => {
  const response = await axios.get(`${API_BASE}/stats`);
  return response.data;
};