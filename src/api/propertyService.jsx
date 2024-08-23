import axios from 'axios';

const BASE_URL = 'http://localhost:8080/properties';

export const getProperties = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const addProperty = async (property) => {
  const formData = new FormData();
  for (const key in property) {
    formData.append(key, property[key]);
  }
  const response = await axios.post(`${BASE_URL}/add`, formData);
  return response.data;
};

export const updateProperty = async (id, property) => {
  const formData = new FormData();
  for (const key in property) {
    formData.append(key, property[key]);
  }
  const response = await axios.put(`${BASE_URL}/update/${id}`, formData);
  return response.data;
};

export const deleteProperty = async (id) => {
  await axios.delete(`${BASE_URL}/delete/${id}`);
};

export const getPropertyById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/properties/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching property details:', error);
    throw error;
  }
};

export const searchProperties = async (params) => {
  const response = await axios.get(`${BASE_URL}/search`, { params });
  return response.data;
};