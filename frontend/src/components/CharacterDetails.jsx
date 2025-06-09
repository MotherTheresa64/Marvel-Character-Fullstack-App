import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Spinner, Alert } from "react-bootstrap";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/characters/${id}`)
      .then(res => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Character not found.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:5000/characters/${id}`)
      .then(() => {
        setDeleted(true);
        setTimeout(() => navigate("/characters"), 1500);
      })
      .catch(() => setError("Failed to delete character."));
  };

  if (loading) return <Spinner animation="border" className="m-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (deleted) return <Alert variant="success">Character deleted!</Alert>;

  return (
    <Container className="mt-4">
      <h2>{character.name}</h2>
      <p><strong>Alignment:</strong> {character.alignment}</p>
      <p><strong>Description:</strong> {character.description}</p>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Container>
  );
};

export default CharacterDetails;
