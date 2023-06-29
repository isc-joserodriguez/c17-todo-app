import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TasksListPage = ({ userId }) => {
  const [tasks, setTasks] = useState([
    {
      titulo: 'Comprar jugo',
      descripcion: 'Ir a la tienda',
      lugar: 'Tienda de la esquina',
    },
  ]);

  useEffect(() => {
    const getAllTasks = () => {
      console.log('getAllTasks for user ' + userId);
    };
    getAllTasks();
  }, [userId]);

  return (
    <>
      <Link to="/tasks/new">Nueva tarea</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Lugar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.titulo}</td>
              <td>{task.descripcion}</td>
              <td>{task.lugar}</td>
              <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TasksListPage;
