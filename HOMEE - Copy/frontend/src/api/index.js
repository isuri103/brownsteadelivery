import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchData = async (endpoint) => {
  const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
  return response.data;
};

export const postData = async (endpoint, data) => {
  const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
  return response.data;
};

export const deleteData = async (endpoint) => {
  const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
  return response.data;
};

export const createDelivery = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/deliveries`, data);
  return response.data;
};

export const getAllDeliveries = async () => {
  const response = await axios.get(`${API_BASE_URL}/deliveries`);
  return response.data;
};

export const deleteDelivery = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/deliveries/${id}`);
  return response.data;
};


