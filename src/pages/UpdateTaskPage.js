import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
const UpdateTaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [task, setTask] = useState({ titulo: '', descripcion: '', lugar: '' });

  useEffect(() => {
    const getTask = async () => {
      const docRef = doc(db, 'tasks', taskId);
      const task = await getDoc(docRef);
      setTask({ ...task.data(), id: task.id });
    };
    getTask();
  }, [taskId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const docRef = doc(db, 'tasks', taskId);
    await setDoc(docRef, task);
    navigate('/tasks');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="tasktitulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          name="titulo"
          value={task.titulo}
          onChange={(event) => setTask({ ...task, titulo: event.target.value })}
          placeholder="Escribe el título de la tarea"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskdescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          name="descripcion"
          value={task.descripcion}
          onChange={(event) =>
            setTask({ ...task, descripcion: event.target.value })
          }
          placeholder="Escribe una descripción"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tasklugar">
        <Form.Label>Lugar</Form.Label>
        <Form.Control
          type="text"
          name="lugar"
          value={task.lugar}
          onChange={(event) => setTask({ ...task, lugar: event.target.value })}
          placeholder="Escribe el lugar"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Actualizar Tarea
      </Button>
    </Form>
  );
};

export default UpdateTaskPage;
