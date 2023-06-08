import { useState } from 'react';
import './App.css';
import Componente from './Componente';

function App() {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [edad, setEdad] = useState(20);
  const [cualquierNombre, setCualquierNombre] = useState(false);
  const [listaNombres, setListaNombres] = useState({});
  const [calificacion, setCalificacion] = useState([]);
  const [nombre, setNombre] = useState('texto');
  const [precio, setPrecio] = useState(12);
  // [referenciaAlEstado, funciónQueModificaEseEstado]
  // Desestructuración
  const onChangeHandler = (event) => {
    // console.log('Cambio en el input su valor es', event.target.value);
    /* setErrorMessage((valorActual) => {
      console.log(valorActual);
      return valorActual + Number(event.target.value);
    }); */

    // setErrorMessage(event.target.value);
    setInputValue(event.target.value);
    if (event.target.value.length < 5) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }
  };

  let componenteMostrado = null;

  if (!showErrorMessage && inputValue !== '') {
    componenteMostrado = <Componente nombre={inputValue} />;
  } else {
    componenteMostrado = null;
  }
  return (
    <>
      <>
        <input
          /* onFocus={() => console.log('El foco está en el input')}
          onBlur={() => console.log('El foco ya no está en el input')} */
          /* onKeyDown={(event) => onChangeHandler(event)} */
          onChange={onChangeHandler}
          value={inputValue}
          onBlur={() => {
            if (inputValue.length < 5) {
              setShowErrorMessage(true);
            } else {
              setShowErrorMessage(false);
            }
          }}
        />
        <br />
        {showErrorMessage && <label>Mínimo son 5 caracteres.</label>}
        <br />
        <button
          disabled={showErrorMessage === true || inputValue === ''}
          onClick={(event) => alert('Hola desde el evento', event)}
        >
          Hola
        </button>
      </>
      <br />

      {/* {!showErrorMessage && inputValue !== '' && (
        <Componente nombre={inputValue} />
      )} */}
      {componenteMostrado}
    </>
  );
}

export default App;
