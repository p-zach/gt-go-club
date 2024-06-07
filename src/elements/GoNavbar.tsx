import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const GoNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container className="px-0 mx-3">
        <Navbar.Brand as={Link} to="/" className="text-decoration-none">GT Go Club</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="top-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-decoration-none">Home</Nav.Link>
            <Nav.Link as={Link} to="/learn" className="text-decoration-none">Learn</Nav.Link>
            <Nav.Link as={Link} to="/board" className="text-decoration-none">Play</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
}
export default GoNavbar
