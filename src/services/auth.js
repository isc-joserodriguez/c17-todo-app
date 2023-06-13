import axios from 'axios';

export const login = async (credenciales) => {
  const { data } = await axios.post(
    'https://simple-server-ochre.vercel.app/login',
    credenciales
  );

  return data;
};
