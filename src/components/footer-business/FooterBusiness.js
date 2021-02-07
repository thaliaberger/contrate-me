import React from "react";
import { Link } from "react-router-dom";
import "../business/BusinessHome.css";

import logo from "../../images/logo.svg";
import linkedin from "../../images/LinkedIn - Negative.svg";
import instagram from "../../images/Instagram - Negative.svg";

function FooterBusiness() {
  return (
    <footer>
      <img src={logo} />
      <div className="business-menu">
        <h3>Menu</h3>
        <Link href="https://contrate-me.vercel.app/" alt="Como funciona">
          Como funciona
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Dúvidas">
          Dúvidas
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Empresas">
          Empresas
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Entrar">
          Entrar
        </Link>
      </div>
      <div className="business-support">
        <h3>Suporte</h3>
        <Link href="https://contrate-me.vercel.app/" alt="Email">
          contato@mecontrate.com
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Ajuda & Suporte">
          Ajuda & Suporte
        </Link>
        <Link
          href="https://contrate-me.vercel.app/"
          alt="Politica de privacidade"
        >
          Politica de privacidade
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Termos & Condições">
          Termos & Condições
        </Link>
      </div>
      <div className="business-social-media">
        <Link href="https://contrate-me.vercel.app/" alt="Linkedin">
          <img src={linkedin} />
        </Link>
        <Link href="https://contrate-me.vercel.app/" alt="Instagram">
          <img src={instagram} />
        </Link>
      </div>
    </footer>
  );
}

export default FooterBusiness;
