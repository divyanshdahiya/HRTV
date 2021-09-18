import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featutred_section from "./components/Featured_section";

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container">
      <div>
        <Navbar />
      </div>
      <div className="grid-right">
        {/* <Header /> */}
        <h1 className="featured-heading">Featured-Artists</h1>
        <Featutred_section />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
