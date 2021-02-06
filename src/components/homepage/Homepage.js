import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "../navbar/Navbar";

import headerImage from "../../images/Group 3.svg";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <header className="header-container">
        <div className="header-content">
          <div>
            <img className="header-image" src={headerImage} />
          </div>
          <div className="header-info">
            <h1>Dê um match com suas empresas dos sonhos</h1>
            <h2>
              Prove seu conhecimento projetos e testes técnicos sugeridos pelas
              empresas que estão de olho em profissionais iniciantes/júnior.
            </h2>
            <Link className="header-btn" to="/">
              Provar meu conhecimento
            </Link>
            <p>Junte-se a 300+ profissionais contratados</p>
          </div>
        </div>
      </header>

      <section className="numbers-section">
        <div>
          <h4>54</h4>
          <p>empresas parceiras</p>
        </div>
        <div>
          <h4>300+</h4>
          <p>profissionais contratados</p>
        </div>
        <div>
          <h4>733</h4>
          <p>testes técnicos submetidos</p>
        </div>
      </section>

      <section>
        <div>
          <h5>O que você vai encontrar?</h5>
          <p>
            Saiba como você vai ser notado pelas empresas e se detacar
            completando os requisitos.
          </p>
        </div>

        <div><img src=""/>
        <div><h6></h6><p></p></div></div>

        <div><img src=""/>
        <div><h6></h6><p></p></div></div>

        <div><img src=""/>
        <div><h6></h6><p></p></div></div>

        <div><img src=""/>
        <div><h6></h6><p></p></div></div>
      </section>
    </div>
  );
}

export default Homepage;
