import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const UserListPage = () => {
  return (
    <Container>
      <h1>Lista de usuarios</h1>
      <Button variant="success">Nuevo usuario</Button> <br />
      <br />
      <Table striped="columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>user-0101</td>
            <td>Marcos</td>
            <td>Perez</td>
            <td>mail@mail.com</td>
            <td>
              <Button variant="primary">Ver info</Button>
            </td>
          </tr>
          <tr>
            <td>A150</td>
            <td>María</td>
            <td>Perez</td>
            <td>mail@mail.com</td>
            <td>
              <Button variant="primary">Ver info</Button>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Pedro</td>
            <td>Perez</td>
            <td>mail@mail.com</td>
            <td>
              <Button variant="primary">Ver info</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
//! JSX
export default UserListPage;
