import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer-candidate/FooterCandidate";

import headerImage from "../../images/Group 3.svg";
import triangulo1 from "../../images/triangulo roxo.svg";
import triangulo2 from "../../images/triangulo amarelo.svg";
import triangulo3 from "../../images/triangulo azul.svg";
import provi from "../../images/PROVI.svg";
import partners1 from "../../images/Frame 22.svg";
import partners2 from "../../images/Frame 23.svg";
import potentialImage from "../../images/Frame 7.svg";
import rectangle from "../../images/Rectangle.svg";
import manWaving from "../../images/man-waving.svg";
import manGoingUp from "../../images/man-going-up.svg";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import logo from "../../images/logo.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import avatars from "../../images/fotinhas.svg";
import free from "../../images/Group 33.svg";
import down from "../../images/down.svg";
import up from "../../images/up.svg";

function Homepage() {
  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            <Link className="header-btn" to="/candidato">
              Provar meu conhecimento
            </Link>
            <div className="header-avatars-div">
              <img src={avatars} />
              <p>
                Junte-se a <strong>300+</strong> profissionais contratados
              </p>
            </div>
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

      {/* FREE */}

      <section className="free-section">
        <img src={free} />
        <p>
          Com apoio das nossas empresas parceiras, a contrate.me é totalmente
          gratuita para você, e sempre será.
        </p>
      </section>

      {/* PARTNERS */}

      <section className="partners-section">
        <img className="logo-provi" src={provi} />
        <div className="partners-section-logos">
          <img src={partners1} />
          <img src={partners2} />
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="services-section-header">
          <h5>Como funciona?</h5>
          <p>
            Você vai ser notado pelas suas habilidades, antes mesmo de entrar no
            processo seletivo.
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

      {/* POTENTIAL */}

      <section className="potential-section">
        <img src={potentialImage} />
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
      </section>

      {/* CALL TO ACTION */}

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
        <img src={manGoingUp} />
      </section>

      {/* FAQ */}

      <section className="faq">
        <div className="faq-group">
          <h5>Dúvidas</h5>
          <div className="question">
            <div className="question-head">
              <h3>Qual é o custo para utilizar a plataforma?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-block">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-head">
              <h3>Como visualizo as vagas disponíveis?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-head">
              <h3>Quem poderá ver meus testes?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-head">
              <h3>Vou receber um certificado?</h3>
              <img src={down} />
            </div>
            <div>
              <p className="display-none">
                Não existe nenhum custo para você utilizar a contrate.me!
                Sabemos como o início de carreira é um momento sensível e
                importante para todos, por isso, nos esforçamos para manter a
                plataforma de graça para vocês.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials-section">
        <h1>O que quem já foi contratado diz</h1>
        <p className="testimonials-subtitle">
          Entenda como o processo ajudou centenas de profissionais a se
          colocarem no mercado.
        </p>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              “I waited to completely finish the course to rate it. This was my
              first approach to python, i am an excel and VBA user. The
              professor has an excellent way to explain it and a lot or order
              and organization. I really recommend it.”
            </p>
            <div className="testimonial-user">
              <img src={user1} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>Founder of Crips</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “I waited to completely finish the course to rate it. This was my
              first approach to python, i am an excel and VBA user. The
              professor has an excellent way to explain it and a lot or order
              and organization. I really recommend it.”
            </p>
            <div className="testimonial-user">
              <img src={user2} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>Founder of Crips</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “I waited to completely finish the course to rate it. This was my
              first approach to python, i am an excel and VBA user. The
              professor has an excellent way to explain it and a lot or order
              and organization. I really recommend it.”
            </p>
            <div className="testimonial-user">
              <img src={user3} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>Founder of Crips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
