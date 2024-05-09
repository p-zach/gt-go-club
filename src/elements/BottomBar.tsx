import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const BottomBar = () => {
  return (
    <Navbar sticky="bottom" bg="dark" expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container className="px-0 mx-3">
        <IconContext.Provider value={{ size: "2em", color: "white" }}>
          <a href="https://github.com/p-zach/gt-go-comp"><FaGithub /></a>
        </IconContext.Provider>
      </Container>
    </Navbar>
  )
}
export default BottomBar
