import React, { useState, useEffect } from "react";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CharacterForm = ({ isEditMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    alignment: "",
    description: ""
  });

  const [loading, setLoading] = useState(isEditMode);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      axios.get(`http://127.0.0.1:5000/characters/${id}`)
        .then(res => setFormData(res.data))
        .catch(() => setError("Failed to load character."))
        .finally(() => setLoading(false));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = isEditMode
      ? axios.put(`http://127.0.0.1:5000/characters/${id}`, formData)
      : axios.post("http://127.0.0.1:5000/characters", formData);

    request
      .then(() => {
        setSuccessMsg(isEditMode ? "Character updated!" : "Character created!");
        setTimeout(() => navigate("/characters"), 1500);
      })
      .catch(() => setError("Submission failed."));
  };

  if (loading) return <Spinner animation="border" className="m-4" />;

  return (
    <Container className="mt-4">
      <h2>{isEditMode ? "Edit Character" : "Create Character"}</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alignment*</Form.Label>
          <Form.Control
            required
            name="alignment"
            value={formData.alignment}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          {isEditMode ? "Update" : "Create"}
        </Button>
      </Form>
    </Container>
  );
};

export default CharacterForm;
