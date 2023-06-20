import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const Ejemplo = () => {
  //*useState
  //! Un componente únicamente se vuelve a renderizar (Se actualiza) cuando se modifica el estado (state)

  //! Recibe un parámetro que representa el valor inicial del estado (state)
  //! Este método retorna un array. El primer elemento del array representa el estado (state)
  //! El segundo elemento del array es una función que actualiza el valor del estado (state)
  const [contador, setContador] = useState(15);

  //* useEffect
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = () => {
    setUsuarios([
      {
        nombre: 'Pedro',
      },
      {
        nombre: 'María',
      },
    ]);
  };

  useEffect(() => {
    //! Este bloque se ejecuta 1 o más veces, dependiedo del array de dependencias
    getUsuarios();
    console.log('Cambió el contador, obtengo usuarios');
    return () => {
      //! La función que se retorna se ejecuta cuando el componente se desmonta.
      console.log('El usuario dejó el componente');
    };
  }, [contador]);
  //! El array de dependencias va a controlar cuando se va a ejecutar el useEffect

  //* useNavigate
  const navigate = useNavigate();

  const aumentarContador = () => {
    console.log('Contador antes de aumentar', contador);
    setContador(contador + 1);
    console.log('Contador despues de aumentar', contador);
    navigate('/otra');
  };

  //* useParams

  const { id } = useParams();
  console.log(usuarios[id]);

  return (
    <div style={{ border: '1px solid red' }}>
      {/* Los estilos inline se colocan como objetos*/}
      <h1>Contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar contador</button>
    </div>
  );
};

export default Ejemplo;
