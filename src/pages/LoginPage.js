import { useState } from 'react';
import { login } from '../services/auth';
import { getAll } from '../services/users';

const LoginPage = () => {
  //! 1.- Manejo del estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //! 2.- Funciones para pasar a los eventos
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  //! 3.- Función para el botón
  const clickHandler = async () => {
    const respuesta = await login({
      email,
      password,
    });
    console.log(respuesta);
    const users = await getAll(respuesta.token);
    console.log(users);
  };

  return (
    /* //! 3.- Estructura de """HTML""" */
    <>
      <label>Email</label>
      <input type="email" value={email} onChange={onChangeEmail} />
      <br />
      <label>Password</label>
      <input type="password" value={password} onChange={onChangePassword} />
      <br />
      <button type="button" onClick={clickHandler}>
        Iniciar sesión
      </button>
    </>
  );
};

export default LoginPage;
