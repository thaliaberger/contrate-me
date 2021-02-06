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

        <div>
          <img src="" />
          <div>
            <h6></h6>
            <p></p>
          </div>
        </div>

        <div>
          <img src="" />
          <div>
            <h6></h6>
            <p></p>
          </div>
        </div>

        <div>
          <img src="" />
          <div>
            <h6></h6>
            <p></p>
          </div>
        </div>

        <div>
          <img src="" />
          <div>
            <h6></h6>
            <p></p>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="faq-group">
          <div className="question">
            <h3>Qual é o custo para utilizar a plataforma?</h3>
            <p>
              Não existe nenhum custo para você utilizar a contrate.me! Sabemos
              como o início de carreira é um momento sensível e importante para
              todos, por isso, nos esforçamos para manter a plataforma de graça
              para vocês.
            </p>
          </div>
          <div className="question">
            <h3>Como visualizo as vagas disponíveis?</h3>
          </div>
          <div className="question">
            <h3>Quem poderá ver meus testes?</h3>
          </div>
          <div className="question">
            <h3>Vou receber um certificado?</h3>
          </div>
        </div>
        <img src={headerImage} />
      </section>
      <section className="call-to-action">
        <div className="action-content">
          <h1>Pronto para se destacar no recrutamento e entrar no mercado?</h1>
          <a
            href="https://contrate-me.vercel.app/"
            alt="Testar"
            className="home-btn"
          >
            Provar meu conhecimento
          </a>
        </div>
        <img src={headerImage} />
      </section>
      <footer>
        <img src={headerImage} />
        <div className="menu">
          <h3>Menu</h3>
          <a href="https://contrate-me.vercel.app/" alt="Como funciona">
            Como funciona
          </a>
          <a href="https://contrate-me.vercel.app/" alt="Dúvidas">
            Dúvidas
          </a>
          <a href="https://contrate-me.vercel.app/" alt="Empresas">
            Empresas
          </a>
          <a href="https://contrate-me.vercel.app/" alt="Entrar">
            Entrar
          </a>
        </div>
        <div className="suporte">
          <h3>Suporte</h3>
          <a href="https://contrate-me.vercel.app/" alt="Email">
            contato@mecontrate.com
          </a>
          <a href="https://contrate-me.vercel.app/" alt="Ajuda & Suporte">
            Ajuda & Suporte
          </a>
          <a
            href="https://contrate-me.vercel.app/"
            alt="Politica de privacidade"
          >
            Politica de privacidade
          </a>
          <a href="https://contrate-me.vercel.app/" alt="Termos & Condições">
            Termos & Condições
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
