import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "./wgo/wgo.player.css"
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
// import "./wgo/wgo.min.js";
// import "./wgo/wgo.player.min.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
