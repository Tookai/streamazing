import React from "react";
import Nolan from "./Nolan";
import Tarantino from "./Tarantino";
import Random from "./Random";
import "../Style/Main.css";

function Main() {
  return (
    <div className="main">
      <h3 className="main__titre">Films de Christopher Nolan</h3>
      <Nolan />
      <h3 className="main__titre">Films de Quentin Tarantino</h3>
      <Tarantino />
      <h3 className="main__titre">Films de différents réalisateurs</h3>
      <Random />
    </div>
  );
}

export default Main;
