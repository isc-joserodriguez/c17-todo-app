import { useState } from 'react';

const Ejemplo = () => {
  //! Un componente únicamente se vuelve a renderizar cuando se modifica el estado (state)

  //! Recibe un parámetro que representa el valor inicial del estado (state)
  //! Este método retorna un array. El primer elemento del array representa el estado (state)
  //! El segundo elemento del array es una función que actualiza el valor del estado (state)
  const [contador, setContador] = useState(15);

  const aumentarContador = () => {
    console.log('Contador antes de aumentar', contador);
    setContador(contador + 1);
    console.log('Contador despues de aumentar', contador);
  };
  return (
    <div style={{ border: '1px solid red' }}>
      {/* Los estilos inline se colocan como objetos*/}
      <h1>Contador: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar contador</button>
    </div>
  );
};

export default Ejemplo;
