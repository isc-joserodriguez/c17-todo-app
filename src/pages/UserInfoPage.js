import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getById } from '../services/users';

const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const initGetInfo = async () => {
      const respuesta = await getById(id);
      setUserInfo(respuesta.data);
    };
    initGetInfo();
  }, [id]);
  return (
    <>
      <h1>User Info</h1>
      <label>{userInfo.firstName}</label>
      <br />
      <label>{userInfo.lastName}</label>
      <br />
      <label>{userInfo.email}</label>
      <br />
      <Link to="/users">Atrás</Link>
    </>
  );
};

export default UserInfoPage;
