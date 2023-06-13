import { useState } from 'react';

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
  const clickHandler = () => {
    console.log({
      email,
      password,
    });
  };

  return (
    /* //! 3.- Estructura de """HTML""" */
    <>
      <label>Email</label>
      <input type="text" value={email} onChange={onChangeEmail} />
      <br />
      <label>Password</label>
      <input type="text" value={password} onChange={onChangePassword} />
      <br />
      <button type="button" onClick={clickHandler}>
        Iniciar sesión
      </button>
    </>
  );
};

export default LoginPage;
