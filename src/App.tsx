import React from "react";
import Container from 'react-bootstrap/Container';
import GoNavbar from "./elements/GoNavbar";
import Board from "./pages/BoardPage";
import BottomBar from "./elements/BottomBar";
import Home from "./pages/HomePage";
import Learn from "./pages/LearnPage";
import { Route, Routes } from "react-router-dom";
// import "./App.scss";

function App() {
  return (
    <div className="">
      <Container fluid data-bs-theme="dark" className="px-0">
        <GoNavbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/learn" Component={Learn}/>
            <Route path="/board" Component={Board}/>
          </Routes>
        </div>
        <BottomBar />
      </Container>
    </div>
  );
}

export default App;
