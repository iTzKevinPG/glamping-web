import axios from 'axios';

const httpClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};

export const getAsync = async (path, params) => {
  try {
    const axiosInstance = await httpClient();
    const response = await axiosInstance.get(path, { params });
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud GET:', error);
    throw error;
  }
};

export const postAsync = async (path, request) => {
  try {
    const axiosInstance = httpClient();
    const response = await axiosInstance.post(path, request);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
};

export const putAsync = async (path, request) => {
  try {
    const axiosInstance = await httpClient();
    const response = await axiosInstance.put(path, request);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud PUT:', error);
    throw error;
  }
};

export default httpClient;
