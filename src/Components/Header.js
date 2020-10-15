import React from "react";
import "../Style/Header.css";
import logo from "../img/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo streAmazing" className="header__logo" />
      <p className="header__slogan">
        streaming <br />& amazing
      </p>
    </div>
  );
}

export default Header;
