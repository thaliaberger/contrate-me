import React, { useState, useEffect } from "react";
import "./HeaderCandidate.css";
import axios from "axios";
import search from "../../images/search.svg";
import notification from "../../images/new.svg";

import userPic from "../../images/Imagem7 1.svg";

function Header() {
  const [candidate, setCandidate] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/candidates"
        );

        console.log(response.data);
        setCandidate(response.data[0]);
        console.log(candidate);
      } catch (err) {}
    }
    fetchData();
  }, []);
  return (
    <div className="header-candidate-container">
      <img className="logo" src={search} alt="Contrate" />
      <img className="logo" src={notification} alt="Contrate" />
      <p>Olá, {candidate.nome}</p>
      <img className="logo" src={userPic} alt="Usuário" />
    </div>
  );
}

export default Header;
