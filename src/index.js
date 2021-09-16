import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
