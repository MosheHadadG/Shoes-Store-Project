import axios from 'axios'

const baseURL = 'https://628f69f60e69410599dbfaed.mockapi.io';

export const getShoes = async () => {
  const response = await axios.get(`${baseURL}/shoes`);
  const shoes = response.data;
  return shoes;
}

export const getShoe = async (id) => {
  const response = await axios.get(`${baseURL}/shoes/${id}`);
  const shoe  = response.data;
  return shoe;
}

export const deleteShoe = async (id) => {
  await axios.delete(`${baseURL}/shoes/${id}`);
}

export const updateShoe = async (id, updatedProduct) => {
  await axios.put(`${baseURL}/shoes/${id}`, updatedProduct);
}

export const createShoe = async (newShoe) => {
  await axios.post(`${baseURL}/shoes/`, newShoe);
}

