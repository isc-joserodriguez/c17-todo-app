import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { getAll } from '../services/users';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  //HARDCODEADO
  //HARCODED
  useEffect(() => {
    const initGetUsers = async () => {
      const respuesta = await getAll();
      setUsers(respuesta.data);
    };
    initGetUsers();
  }, []);

  return (
    <Container>
      <h1>Lista de usuarios</h1>
      <Button variant="success">Nuevo usuario</Button> <br />
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
                  <Button variant="primary">Ver info</Button>
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
