import React from 'react';
import { Button, Form } from 'react-bootstrap';

const NewTaskPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="taskTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          name="titulo"
          placeholder="Escribe el título de la tarea"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          name="descripcion"
          placeholder="Escribe una descripción"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="taskPlace">
        <Form.Label>Lugar</Form.Label>
        <Form.Control type="text" name="lugar" placeholder="Escribe el lugar" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar Tarea
      </Button>
    </Form>
  );
};

export default NewTaskPage;
