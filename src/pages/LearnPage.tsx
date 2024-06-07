import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./shared.scss"

function Learn() {
  return (
    <Container fluid data-bs-theme="dark" className="bg-body text-white p-2 min-vh-100">
      <div className="go-card mx-auto">
        <Card className="mb-4">
          <Card.Header as="h6">Learn</Card.Header>
          <Card.Body className="px-5">
            <Card.Title className="text-center">Learn to play the game of Go</Card.Title>
            <Card.Text>
              This page is under construction.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Learn;
