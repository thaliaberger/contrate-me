import React, { useState } from "react";
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
import manGoingUp from "../../images/man-going-up.svg";
import user1 from "../../images/user1.svg";
import user2 from "../../images/user2.svg";
import user3 from "../../images/user3.svg";
import avatars from "../../images/fotinhas.svg";
import free from "../../images/Group 33.svg";
import goTop from "../../images/up2.svg";

function Homepage() {
  const [display, setDisplay] = useState("go-top-none");
  window.onscroll = () => handleScroll();

  function handleScroll() {
    document.documentElement.scrollTop > 450
      ? setDisplay("go-top-block")
      : setDisplay("go-top-none");
  }
  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleClick(event) {
    if (event.target.src === "https://i.ibb.co/N3TNWTk/Group-45.png") {
      event.target.src = "https://i.ibb.co/gdN8L27/Group-44.png";
    } else {
      event.target.src = "https://i.ibb.co/N3TNWTk/Group-45.png";
    }

    if (
      event.target.parentNode.parentNode.children[1].firstChild.className ===
      "display-block"
    ) {
      event.target.parentNode.parentNode.children[1].firstChild.className =
        "display-none";
    } else {
      event.target.parentNode.parentNode.children[1].firstChild.className =
        "display-block";
    }
  }

  return (
    <div className="homepage">
      <img onClick={ScrollTop} className={display} src={goTop} />
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
          Com apoio das nossas empresas parceiras, a{" "}
          <strong>contrate.me</strong> é totalmente gratuita para você, e sempre
          será.
        </p>
      </section>

      {/* PARTNERS */}

      <section className="partners-section">
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
          <Link className="header-btn" to="/candidato">
            Provar meu conhecimento
          </Link>
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
              <img
                onClick={handleClick}
                src="https://i.ibb.co/N3TNWTk/Group-45.png"
              />
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
              <h3>Como visualizo as vagas disponíveis?</h3>
              <img
                onClick={handleClick}
                src="https://i.ibb.co/N3TNWTk/Group-45.png"
              />
            </div>
            <div>
              <p className="display-none">
                Não existem vagas cadastradas na contrate.me. Na plataforma,
                você viasualiza testes técinos solicitados pelas empresas
                parceiras. Assim, você pode submeter suas soluções para os
                testes e provar as suas habilidades antes mesmo de ter seu
                currículo analisado.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-head">
              <h3>Quem poderá ver meus testes?</h3>
              <img
                onClick={handleClick}
                src="https://i.ibb.co/N3TNWTk/Group-45.png"
              />
            </div>
            <div>
              <p className="display-none">
                Inicialmente, a empresa que solicitou o teste é a única que tem
                acesso a sua solução. Caso você esteja no ranking semanal e uma
                outra empresa se interessar por você, ela poderá ter acesso às
                suas soluções mesmo que você não tenha completado testes nelas!
                Assim, você aumenta a sua visibilidade e fica mais perto de
                conquistar sua vaga.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="question-head">
              <h3>Vou receber um certificado?</h3>
              <img
                onClick={handleClick}
                src="https://i.ibb.co/N3TNWTk/Group-45.png"
              />
            </div>
            <div>
              <p className="display-none">
                A contate.me não é uma plataforma educacional, e nós não
                emitimos certificados. Você receberá notas nos seus testes
                submetidos e poderá aproveitar esse feedback para buscar
                melhorar alguns pontos individualmente.
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
              “Adorei a plataforma, intuitiva e simples de incluir as
              informações. Já completei alguns testes técnicos e já fui chamado
              para um processo seletivo.”
            </p>
            <div className="testimonial-user">
              <img src={user1} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Yuri</b>
                </p>
                <p>Dev Front End</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “Realmente essa plataforma veio para ajudar quem está em início de
              carreira. Consegui finalmente o emprego que tanto almejei!”
            </p>
            <div className="testimonial-user">
              <img src={user2} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Agatha</b>
                </p>
                <p>Dev Front End</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              “Obrigada Contrate-me! A ideia de mostrar as habilidades minhas na
              prática acelerou minha visibilidade com as empresas! Já consegui
              ser chamado para alguns processos seletivos”
            </p>
            <div className="testimonial-user">
              <img src={user3} />
              <div className="testimonial-user-identification">
                <p>
                  <b>Henk Fortuin</b>
                </p>
                <p>Dev Back End</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="logo-provi" src={provi} />
      <Footer />
    </div>
  );
}

export default Homepage;
