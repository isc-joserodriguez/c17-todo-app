import { useEffect, useState } from 'react';
import Ejemplo from './Ejemplo';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserListPage from './pages/UserListPage';
//! 1.- Importar Routes, Route
import { Navigate, Route, Routes } from 'react-router-dom';

//! Importar imagen

//! importar css
import UserInfoPage from './pages/UserInfoPage';
import './style.css';

function App() {
  console.log('Se renderiza App');
  //! 1.- Agregué un estado para el token
  const [token, setToken] = useState(null);

  //! Hooks de react
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  //! 2.- Separé las rutas entre rutas privadas & rutas públicas
  const privateRoutes = [
    <Route key={4} path="/otra" element={<h1>Otra</h1>} />,
    <Route key={45} path="/users" element={<UserListPage />} />,
    <Route key={46} path="/users/:id" element={<UserInfoPage />} />,
  ]; //* Estas se muestran cuando mi usuario está autenticado

  const publicRoutes = [
    <Route
      key="dos"
      path="/login"
      element={<LoginPage updateToken={updateToken} />}
    />,
    <Route
      key="3"
      path="/registro"
      element={<RegisterPage updateToken={updateToken} />}
    />,
  ]; //* Estas se muestran cuando mi usuario NO está autenticado

  const generalRoutes = [
    <Route
      key="n97rx y3ryqwye0f"
      path="/"
      element={<h1>{token ? 'Bienvenido usuario' : 'Inicia sesión'}</h1>}
    />,
    <Route key="laskjfñlsajdf" path="*" element={<Navigate to="/" />} />,
  ];

  /* <Route
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
  />, */

  return (
    <>
      <Navbar
        links={[
          {
            to: '/login',
            text: 'Login',
            show: !token,
          },
          {
            to: '/registro',
            text: 'Registro',
            show: !token,
          },
          {
            to: '/otra',
            text: 'Otra',
            show: token,
          },
          {
            to: '/users',
            text: 'Usuarios',
            show: token,
          },
          {
            to: '/ejemplo/0',
            text: 'Ejemplo',
            show: true,
          },
        ]}
      />
      <Routes>
        {token && privateRoutes}
        {!token && publicRoutes}
        {generalRoutes}
        <Route path="/ejemplo/:id" element={<Ejemplo />} />,
      </Routes>
    </>
  );
}

export default App;
