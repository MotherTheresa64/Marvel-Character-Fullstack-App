import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-4">Welcome to the Marvel Character Database</h1>
      <p className="lead">Browse, add, and manage your favorite Marvel heroes and villains.</p>
      <Link to="/characters">
        <Button variant="primary" size="lg" className="me-3">View Characters</Button>
      </Link>
      <Link to="/create">
        <Button variant="success" size="lg">Add New Character</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
