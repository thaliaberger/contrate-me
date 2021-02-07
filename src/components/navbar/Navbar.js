import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../images/logo.svg";

function Navbar() {
  function handleWorksScroll() {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  }

  function handleDoubtsScroll() {
    window.scrollTo({ top: 4100, behavior: "smooth" });
  }

  return (
    <div className="navbar">
      <div className="logo-div">
        <img className="logo-image" src={logo} />
      </div>

      <div className="links-div">
        <p onClick={handleWorksScroll}>Como funciona?</p>
        <p onClick={handleDoubtsScroll}>Dúvidas</p>
        <Link className="business-navbar-entrar" to="/business">
          Empresa
        </Link>
      </div>
      <div className="login-div">
        <Link className="navbar-entrar" to="/dashboard">
          Entrar
        </Link>
        <Link className="navbar-btn" to="/candidato">
          Provar meu conhecimento
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
