import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function NewChallenge() {
  const [state, setState] = useState({
    nome: "",
    descricao: "",
    linkExterno: ""
  });

  const history = useHistory();

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
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Teste</h1>
      {/* Nome */}
      <div className="">
        <label htmlFor="novoNome">Nome</label>
        <input
          type="text"
          className=""
          id="novoNome"
          name="nome"
          onChange={handleChange}
          value={state.nome}
        />
      </div>

      {/* Data de Nascimento */}
      <div className="">
        <label htmlFor="novaDescricao">Descrição</label>
        <input
          type="text"
          className=""
          id="novaDescricao"
          name="descricao"
          onChange={handleChange}
          value={state.descricao}
        />
      </div>

      {/* Email */}
      <div className="">
        <label htmlFor="novoLinkExterno">Link Externo</label>
        <input
          type="text"
          className=""
          id="novoLinkExterno"
          name="linkExterno"
          onChange={handleChange}
          value={state.linkExterno}
        />
      </div>

      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}

export default NewChallenge;
