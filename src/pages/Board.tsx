import React from "react";
import Container from 'react-bootstrap/Container';
import "./Board.scss";

const Board = () => {
  return (
    <Container fluid data-bs-theme="dark" className="bg-body text-white vh-100 p-2">
        Go board goes here.
    </Container>
  )
}
export default Board
