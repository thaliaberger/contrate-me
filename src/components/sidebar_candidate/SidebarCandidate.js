import React from "react";
import logo from "../../images/logobranca.svg";
import icon1 from "../../images/icon1.svg";
import icon3 from "../../images/icon3.svg";
import icon4 from "../../images/icon4.svg";
import icon5 from "../../images/icon5.svg";
import icon7 from "../../images/icon7.svg";
import icon8 from "../../images/icon8.svg";
import { Link } from "react-router-dom";
import './SidebarCandidate.css';

function SidebarCandidate(){
    return(
        <div className="sidebar-candidate">
            <img className="logo" src={logo} alt="Contrate" />
            <Link to="/" className="menu"><img src={icon1} alt="Contrate" /> Visão geral</Link>
            <Link to="/" className="menu"><img src={icon8} alt="Contrate" />Buscar testes</Link>
            <Link to="/" className="menu"><img src={icon3} alt="Contrate" />Testes ativos</Link>
            <Link to="/" className="menu"><img src={icon4} alt="Contrate" />Perfil</Link>
            <Link to="/" className="menu"><img src={icon5} alt="Contrate" />Configurações</Link>
            <Link to="/" className="menu"><img src={icon7} alt="Contrate" />Sair</Link>
        </div>
    );
}

export default SidebarCandidate;