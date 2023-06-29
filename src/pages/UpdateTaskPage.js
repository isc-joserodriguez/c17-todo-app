import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateTaskPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState({ title: '', description: '', place: '' });

  useEffect(() => {
    // Reemplaza 'userId' con el ID de usuario actual si es necesario.
    /* getTask('userId', taskId)
      .then((fetchedTask) => setTask(fetchedTask))
      .catch((error) => console.error(error)); */
  }, [taskId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí debes realizar la actualización de la tarea en tu backend
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="taskTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={task.title}
          onChange={(event) => setTask({ ...task, title: event.target.value })}
          placeholder="Escribe el título de la tarea"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={task.description}
          onChange={(event) =>
            setTask({ ...task, description: event.target.value })
          }
          placeholder="Escribe una descripción"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskPlace">
        <Form.Label>Lugar</Form.Label>
        <Form.Control
          type="text"
          name="place"
          value={task.place}
          onChange={(event) => setTask({ ...task, place: event.target.value })}
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
