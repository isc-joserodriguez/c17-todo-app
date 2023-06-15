import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
//! 1.- Importar Routes, Route
import { Route, Routes } from 'react-router-dom';

//! Importar imagen
import Imagen404 from './assets/img/404.jpg';

//! importar css
import './style.css';

function App() {
  const routes = [
    <Route key="n97rx y3ryqwye0f" path="/" element={<h1>Inicio</h1>} />,
    <Route key="dos" path="/login" element={<LoginPage />} />,
    <Route key="3" path="/registro" element={<RegisterPage />} />,
    <Route key={4} path="/otra" element={<h1>Otra</h1>} />,
    <Route
      key={4}
      path="*"
      element={
        <>
          <img
            src={Imagen404}
            alt=""
            style={{
              marginTop: '10px',
              marginBottom: '10%',
              width: '30%',
              height: '40%',
            }}
          />
          <img src={Imagen404} alt="" className="imagen" id="algo" />
          {Imagen404}
        </>
      }
    />,
  ];

  return (
    <>
      <Navbar />
      <Routes>{routes}</Routes>
    </>
  );
}

export default App;
