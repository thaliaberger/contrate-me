import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img className="logo-image" src="" />
        <p className="logo-name">contrate.me</p>
      </div>

      <div className="links-div">
        <p>Como funciona?</p>
        <p>Dúvidas</p>
        <p>Empresa</p>
      </div>
      <div className="login-div">
        <Link className="navbar-entrar" to="/">
          Entrar
        </Link>
        <Link className="navbar-btn" to="/">
          Provar meu conhecimento
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
