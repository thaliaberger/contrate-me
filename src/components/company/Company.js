import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Company() {
  const [state, setState] = useState({
    nome: "",
    razaoSocial: "",
    cnpj: "",
    estado: "",
    quantidadeFuncionarios: 0,
    site: "",
    telefone: "",
    email: "",
    segmento: "",
  });

  console.log(state);
  const history = useHistory();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleTecnologias(event) {
    setState({
      ...state,
      tecnologias: [...state.tecnologias, event.currentTarget.value],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      "https://contrate-me-api.herokuapp.com/companies",
      state
    );

    console.log(response);
    history.push("/business");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Teste</h1>
      {/* Nome */}
      <div className="">
        <label htmlFor="novoNome">Nome</label>
        <input
          name="nome"
          type="text"
          className=""
          id="novoNome"
          onChange={handleChange}
          value={state.nome}
        />
      </div>

      {/* RAZAO SOCIAL */}
      <div className="">
        <label htmlFor="razaoSocial">Razão Social</label>
        <input
          type="text"
          className=""
          id="razaoSocial"
          name="razaoSocial"
          onChange={handleChange}
          value={state.razaoSocial}
        />
      </div>

      {/* CNPJ */}
      <div className="">
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          className=""
          id="cnpj"
          name="cnpj"
          onChange={handleChange}
          value={state.cnpj}
        />
      </div>

      {/* QUANTIDADE DE FUNCIONARIOS */}
      <div className="">
        <label htmlFor="quantidadeFuncionarios">
          Quantidade de funcionários:
        </label>
        <input
          type="text"
          className=""
          id="quantidadeFuncionarios"
          name="quantidadeFuncionarios"
          onChange={handleChange}
          value={state.quantidadeFuncionarios}
        />
      </div>

      {/* Site */}
      <div className="">
        <label htmlFor="site">Site:</label>
        <input
          name="site"
          type="text"
          className=""
          id="site"
          onChange={handleChange}
          value={state.site}
        />
      </div>
      {/* Estado */}
      <label htmlFor="estado">Estado:</label>

      <select name="estado" id="estado" onChange={handleChange}>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
      </select>

      {/* Email */}
      <div className="">
        <label htmlFor="novoEmail">Email</label>
        <input
          type="text"
          className=""
          id="novoEmail"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
      </div>

      {/* Telefone */}
      <div className="">
        <label htmlFor="novoTelefone">telefone</label>
        <input
          type="text"
          className=""
          id="novoTelefone"
          name="telefone"
          onChange={handleChange}
          value={state.telefone}
        />
      </div>

      {/* Segmento */}
      <div className="">
        <label htmlFor="segmento">Segmento</label>
        <input
          type="text"
          className=""
          id="segmento"
          name="segmento"
          onChange={handleChange}
          value={state.Segmento}
        />
      </div>

      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}

export default Company;
