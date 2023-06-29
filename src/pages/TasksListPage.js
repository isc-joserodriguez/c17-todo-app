import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
const TasksListPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const collectionName = collection(db, 'tasks');
    onSnapshot(collectionName, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

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
              <td>{task.id}</td>
              <td>{task.titulo}</td>
              <td>{task.descripcion}</td>
              <td>{task.lugar}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    navigate('/tasks/update/' + task.id);
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    const decRef = doc(db, 'tasks', task.id);
                    deleteDoc(decRef);
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TasksListPage;
