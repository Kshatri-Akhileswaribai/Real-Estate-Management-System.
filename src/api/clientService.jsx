import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/clients';

export const getClientProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/1`);
  return response.data;
};

export const updateClientProfile = async (clientData) => {
  const response = await axios.put(`${API_BASE_URL}/1`, clientData);
  return response.data;
};

export const getPurchaseHistory = async () => {
  const response = await axios.get(`${API_BASE_URL}/1/purchase-history`);
  return response.data;
};

export const getSavedItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/1/saved-items`);
  return response.data;
};
