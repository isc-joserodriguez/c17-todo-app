import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
//! 1.- Importar Routes, Route
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<h1>Registro</h1>} />
        <Route path="/otra" element={<h1>Otra</h1>} />
      </Routes>
    </>
  );
}

export default App;
