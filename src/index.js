import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
//! 1.- Importamos BrowserRouter de react-router-dom
import { BrowserRouter } from 'react-router-dom';
//! Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//! 2.- Encerramos la aplicación principal entre el nuevo componente

//! Importamos script firebase
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
