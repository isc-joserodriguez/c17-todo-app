import axios from 'axios';

const baseUrl = 'https://simple-server-ochre.vercel.app';
const usersUrl = `${baseUrl}/users`;
export const getAll = async () => {
  const response = await axios.get(usersUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const getById = async (id) => {
  const response = await axios.get(`${usersUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const createNew = async (data) => {
  const response = await axios.post(usersUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};