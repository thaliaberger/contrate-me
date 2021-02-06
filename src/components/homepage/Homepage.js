import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "../navbar/Navbar";

import headerImage from "../../images/Group 3.svg";
import triangulo1 from "../../images/triangulo roxo.svg";
import triangulo2 from "../../images/triangulo amarelo.svg";
import triangulo3 from "../../images/triangulo azul.svg";
import provi from "../../images/Group 19 1.png";
import partners1 from "../../images/Frame 21.svg";
import partners2 from "../../images/Frame 20.svg";
import potentialImage from "../../images/Frame 7.svg";
import rectangle from "../../images/Rectangle.svg";

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

      {/* NUMBERS */}

      <section className="numbers-section">
        <div>
          <h4>54</h4>
          <p>empresas parceiras</p>
        </div>
        <img src={rectangle} />
        <div>
          <h4>300+</h4>
          <p>profissionais contratados</p>
        </div>
        <img src={rectangle} />

        <div>
          <h4>733</h4>
          <p>testes técnicos submetidos</p>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="services-section-header">
          <h5>O que você vai encontrar?</h5>
          <p>
            Saiba como você vai ser notado pelo seu trabalho dos sonhos antes
            mesmo de entrar no processo seletivo. Com a contrate.me, você tem
            acesso aos testes técnicos que as melhores empresas de tecnologia
            estão pedindo.
          </p>
          <p>
            Além disso, você tem liberdade de se dedicar em um momento que for
            melhor para você, e completar quantos testes conseguir para entrar
            no ranking da semana e se destacar!
          </p>
        </div>

        <div className="services-card">
          <img src={triangulo1} />
          <div className="services-card-text">
            <h6>Testes técnicos solicitados pelas empresas</h6>
            <p>
              Explore diferentes linguagens e dê o seu melhor em testes que as
              empresas querem ver!
            </p>
          </div>
        </div>

        <div className="services-card">
          <img src={triangulo2} />
          <div className="services-card-text">
            <h6>Se destaque e esteja entre os primeiros doo ranking</h6>
            <p>
              Linkedin, Github, portfólio pessoal, CV, todas informações ao seu
              dispor
            </p>
          </div>
        </div>

        <div className="services-card">
          <img src={triangulo3} />
          <div className="services-card-text">
            <h6>Tenha seu portfólio notado </h6>
            <p>
              Suba até 03 projetos individuais, e compartilhe mais dos seu
              conhecimento.
            </p>
          </div>
        </div>

        <div className="services-card">
          <img src={triangulo1} />
          <div className="services-card-text">
            <h6>Destaque seus links externos</h6>
            <p>
              Linkedin, Github, portfólio pessoal, CV... Quanto mais, melhor!
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}

      <section className="partners-section">
        <img className="logo-provi" src={provi} />
        <div className="partners-section-logos">
          <img src={partners1} />
          <img src={partners2} />
        </div>
      </section>

      {/* POTENTIAL */}

      <section className="potential-section">
        <div>
          <h5>
            Seja notado pelo seu potencial e não somente pelo seu currículo
          </h5>
          <p>
            Faça com que a sua porta de entrada nas empresas seja o seu código!
            Conquiste a sua sonhada vaga mostrando o seu potencial para
            profissionais responsáveis pela contratação.
          </p>
        </div>
        <img src={potentialImage} />
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
