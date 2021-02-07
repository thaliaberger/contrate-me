import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

function NewChallenge() {
  const [state, setState] = useState({
    nome: "",
    descricao: "",
<<<<<<< HEAD
    linkExterno: ""
=======
    linkExterno: "",
>>>>>>> upstream/master
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
    <div>
        <Sidebar /> 
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

            <button type="submit" className="">
                Submit
            </button>
        </form>
    </div>
  );
}

export default NewChallenge;
