// ContactForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de enviar el formulario (por ejemplo, hacer una solicitud a un servidor)
    console.log("Formulario enviado:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3" 
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Control
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-3" 
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mb-3" 
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Contact;
