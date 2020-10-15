import React from "react";
import "../Style/Banner.css";
import Watchmen from "../img/Movie-Cover/Watchmen.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={Watchmen} alt="Bannière Watchmen" className="banner__img" />
    </div>
  );
}

export default Banner;
