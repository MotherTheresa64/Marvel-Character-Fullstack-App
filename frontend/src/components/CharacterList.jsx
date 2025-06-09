import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/characters")
      .then(res => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch characters.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" className="m-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="container mt-4">
      <Row>
        {characters.map(char => (
          <Col key={char.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={char.image_url} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{char.alignment}</Card.Subtitle>
                <Card.Text>{char.powers}</Card.Text>
                <Link to={`/characters/${char.id}`}>
                  <Button variant="primary" size="sm" className="me-2">View</Button>
                </Link>
                <Link to={`/edit/${char.id}`}>
                  <Button variant="warning" size="sm">Edit</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CharacterList;
