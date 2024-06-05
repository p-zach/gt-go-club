import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const GoNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container className="px-0 mx-3">
        <Navbar.Brand href="">GT Go Club</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="top-navbar">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link> 
            <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default GoNavbar
