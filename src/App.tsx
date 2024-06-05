import React from "react";
import Container from 'react-bootstrap/Container';
import GoNavbar from "./elements/GoNavbar";
import Board from "./pages/BoardPage";
import BottomBar from "./elements/BottomBar";
import About from "./pages/AboutPage";
import { Route, Routes } from "react-router-dom";
// import "./App.scss";

function App() {
  return (
    <div className="">
      <Container fluid data-bs-theme="dark" className="px-0">
        <GoNavbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Board}/>
            <Route path="/about" Component={About}/>
          </Routes>
        </div>
        <BottomBar />
      </Container>
    </div>
  );
}

export default App;
