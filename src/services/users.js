import axios from 'axios';

export const getAll = async (token) => {
  const { data } = await axios.get(
    'https://simple-server-ochre.vercel.app/users/',
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return data;
};
