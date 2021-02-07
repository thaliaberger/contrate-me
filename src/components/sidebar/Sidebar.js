import React from "react";
import logo from "../../images/logobranca.svg";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import icon4 from "../../images/icon4.svg";
import icon5 from "../../images/icon5.svg";
import icon6 from "../../images/icon6.svg";
import icon7 from "../../images/icon7.svg";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="Contrate" />
      <Link to="/dashboard_empresa" className="menu">
        <img src={icon1} alt="Contrate" /> Visão geral
      </Link>
      <Link to="/novo_desafio" className="menu">
        <img src={icon2} alt="Contrate" />
        Cadastrar testes
      </Link>
      <Link to="/dashboard_empresa" className="menu">
        <img src={icon3} alt="Contrate" />
        Testes ativos
      </Link>
      <Link to="/dashboard_empresa" className="menu">
        <img src={icon4} alt="Contrate" />
        Candidatos
      </Link>
      <Link to="/dashboard_empresa" className="menu">
        <img src={icon5} alt="Contrate" />
        Configurações
      </Link>
      <Link to="/business" className="menu">
        <img src={icon7} alt="Contrate" />
        Sair
      </Link>
    </div>
  );
}

export default Sidebar;
