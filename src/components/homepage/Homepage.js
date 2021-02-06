import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"

import Navbar from "../navbar/Navbar";

import headerImage from "../../images/Group 3.svg";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <header className="header">
  <div>      <img src={headerImage} /></div>
  <div>
  <h1></h1></div>
   
      </header>

      <section className="call-to-action">
        <div className="action-content">
          <h1>Pronto para se destacar no recrutamento e entrar no mercado?</h1>
          <a href="https://contrate-me.vercel.app/" alt="Testar" className="home-btn">Provar meu conhecimento</a>
        </div>
        <img src={headerImage} />
      </section>
      <footer>
        <img src={headerImage} />
        <div className="Menu">
          <h3>Menu</h3>
          <a href="https://contrate-me.vercel.app/" alt="Como funciona">Como funciona</a>
          <a href="https://contrate-me.vercel.app/" alt="Dúvidas">Dúvidas</a>
          <a href="https://contrate-me.vercel.app/" alt="Empresas">Empresas</a>
          <a href="https://contrate-me.vercel.app/" alt="Entrar">Entrar</a>
        </div>
        <div className="Suporte">
          <h3>Suporte</h3>
          <a href="https://contrate-me.vercel.app/" alt="Email">contato@mecontrate.com</a>
          <a href="https://contrate-me.vercel.app/" alt="Ajuda & Suporte">Ajuda & Suporte</a>
          <a href="https://contrate-me.vercel.app/" alt="Politica de privacidade">Politica de privacidade</a>
          <a href="https://contrate-me.vercel.app/" alt="Termos & Condições">Termos & Condições</a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
