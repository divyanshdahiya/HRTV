import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featutred_section from "./components/Featured_section";
import ArtistCard from "./components/ArtistCard";

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container">
      <div>
        <Navbar />
      </div>
      <div className="grid-right">
        {/* <Header /> */}
        <Featutred_section />
        <ArtistCard />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
