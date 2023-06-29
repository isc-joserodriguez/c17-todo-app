import { useState } from 'react';
import { register } from '../services/auth';

const RegisterPage = ({ updateToken }) => {
  //! 1.- Crear los estados
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  //! 2.- Crear las funciones para los eventos
  const onChangeForm = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const onClickHandler = async () => {
    console.log(formValues);
    const respuesta = await register(formValues);
    localStorage.setItem('token', respuesta.token);
    localStorage.setItem('userId', respuesta.userId);
    updateToken(respuesta.token);
  };

  //! 3.- Agregar las funciones en los eventos
  return (
    <>
      <label>Nombre</label>
      <input
        id="firstName"
        type="text"
        value={formValues.nombre}
        onChange={onChangeForm}
      />
      <br />
      <label>Apellido</label>
      <input
        id="lastName"
        type="text"
        value={formValues.apellido}
        onChange={onChangeForm}
      />
      <br />
      <label>Email</label>
      <input
        id="email"
        type="text"
        value={formValues.email}
        onChange={onChangeForm}
      />
      <br />
      <label>Password</label>
      <input
        id="password"
        type="text"
        value={formValues.password}
        onChange={onChangeForm}
      />
      <br />
      <button type="button" onClick={onClickHandler}>
        Registrar
      </button>
    </>
  );
};

export default RegisterPage;
