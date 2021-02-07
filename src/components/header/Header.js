import React from "react";
import './Header.css';
import companyprofile from "../../images/companyprofile.svg";
import search from "../../images/search.svg";
import notification from "../../images/new.svg";

function Header(){
    return(
        <header>
            <img className="logo" src={search} alt="Contrate" />
            <img className="logo" src={notification} alt="Contrate" />
            <p>Olá, Provi</p>
            <img className="logo" src={companyprofile} alt="Contrate" />

        </header>
    );
}

export default Header;