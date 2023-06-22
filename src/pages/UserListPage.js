import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { getAll } from '../services/users';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  //HARDCODEADO
  //HARCODED
  useEffect(() => {
    const initGetUsers = async () => {
      const respuesta = await getAll();
      setUsers(respuesta.data);
    };
    initGetUsers();
  }, []);

  const redireccionUser = (id) => {
    navigate('/users/' + id);
  };

  return (
    <Container>
      <h1>Lista de usuarios</h1>
      <Link to="/users/new">Nuevo usuario</Link> <br />
      <br />
      {users.length ? (
        <Table striped="columns">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      redireccionUser(user._id);
                    }}
                  >
                    Ver info (botón)
                  </Button>
                  <Link to={`/users/${user._id}`}>Ver info (enlace)</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No hay usuarios en el sistema</h1>
      )}
    </Container>
  );
};
//! JSX
export default UserListPage;
