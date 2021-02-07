import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <img src={logo} alt="Contrate" />
            <Link to="/" className="menu">Visão geral</Link>
            <Link to="/" className="menu">Cadastrar testes</Link>
            <Link to="/" className="menu">Testes ativos</Link>
            <Link to="/" className="menu">Candidatos</Link>
            <Link to="/" className="menu">Configurações</Link>
            <Link to="/" className="menu">Inscrição</Link>
            <Link to="/" className="menu">Sair</Link>
        </div>
    );
}

export default Sidebar;