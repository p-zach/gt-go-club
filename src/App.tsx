import React from "react";
import Container from 'react-bootstrap/Container';
import GoNavbar from "./elements/GoNavbar";
import Board from "./pages/Board";
import BottomBar from "./elements/BottomBar";
import "./App.scss";

function App() {
  return (
    <div className="">
      <Container fluid data-bs-theme="dark" className="px-0">
        <GoNavbar />
        <Board />
        <BottomBar />
      </Container>
    </div>
  );
}

export default App;
