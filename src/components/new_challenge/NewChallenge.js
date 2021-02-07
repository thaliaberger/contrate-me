import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import './NewChallenge.css';

function NewChallenge() {
  const [state, setState] = useState({
    nome: "",
    descricao: "",
    linkExterno: "",
  });

  const history = useHistory();

  console.log(state);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      "https://contrate-me-api.herokuapp.com/challenges",
      state
    );

    console.log(response);
    localStorage.setItem("id", `${response.data._id}`);
    history.push("/");
  }

  return (
    <div className="new-challenge-section">
        <Sidebar /> 
        <div className="new-challenge-content">
          <h1>Cadastrar testes</h1>
          <form onSubmit={handleSubmit}>
              <h1>Teste</h1>
              {/* Nome */}
              <div className="">
                  <label htmlFor="novoNome">Título</label>
                  <input
                  type="text"
                  className=""
                  id="novoNome"
                  name="nome"
                  onChange={handleChange}
                  value={state.nome}
                  />
              </div>

        {/* Descrição*/}
        <div className="">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            className=""
            id="descricao"
            name="descricao"
            onChange={handleChange}
            value={state.descricao}
          />
        </div>

        {/* Link Externo */}
        <div className="">
          <label htmlFor="linkExterno">Link Externo</label>
          <input
            type="text"
            className=""
            id="linkExterno"
            name="linkExterno"
            onChange={handleChange}
            value={state.linkExterno}
          />
        </div>

              <button type="submit" className="button">
                Cadastrar teste técnico
              </button>
          </form>
        </div>
    </div>
  );
}

export default NewChallenge;
