import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import "./NewChallenge.css";

function NewChallenge() {
  const [state, setState] = useState({
    nome: "",
    descricao: "",
    linkExterno: "",
    area: "",
    destino: "",
    tecnologias: [],
  });

  const history = useHistory();

  function handleTecnologias(event) {
    setState({
      ...state,
      tecnologias: [...state.tecnologias, event.currentTarget.value],
    });
  }

  console.log(state);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(state);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post(
      "https://contrate-me-api.herokuapp.com/challenges",
      state
    );

    console.log(response);
    localStorage.setItem("challengeId", `${response.data._id}`);
    history.push("/dashboard_empresa");
  }

  return (
    <div className="new-challenge-section">
      <Sidebar />
      <div className="new-challenge-content">
        <Header />
        <h1 className="new-challenge-title">Cadastrar novo teste</h1>
        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="challenge-grid">
            <div className="challenge-text-input">
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
            <div className="challenge-text-input">
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
            <div className="challenge-text-input">
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

            <div className="challenge-select-input">
              <label htmlFor="destino">Local do link externo</label>

              <select onChange={handleChange} name="destino" id="destino">
                <option disabled selected>
                  Escolha
                </option>
                <option value="GitHub">GitHub</option>
                <option value="Adobe XD">Adobe XD</option>
                <option value="Figma">Figma</option>
                <option value="Scketch">Scketch</option>
                <option value="Consulta de API">Consulta de API</option>
              </select>
            </div>

            <div className="challenge-select-input">
              <label htmlFor="area">Área</label>

              <select onChange={handleChange} name="area" id="area">
                <option disabled selected>
                  Escolha
                </option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Full Stack">Full-Stack</option>
              </select>
            </div>
          </div>
          {/* TECNOLOGIAS */}
          <div>
            <p className="challenge-tec">Tecnologias</p>
            <div className="challenge-tec-grid">
              <input
                onChange={handleTecnologias}
                value="Amazon AWS"
                type="checkbox"
                id="amazonAWS"
                name="amazonAWS"
              ></input>
              <label htmlFor="amazonAWS">Amazon AWS</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                value="Angular"
                id="angular"
                name="angular"
              ></input>
              <label htmlFor="angular">Angular</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="comptia"
                value="CompTIA"
                name="comptia"
              ></input>
              <label htmlFor="comptia">CompTIA</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="deepLearning"
                value="Deep Learning"
                name="deepLearning"
              ></input>
              <label htmlFor="deepLearning">Deep Learning</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="django"
                name="django"
                value="Django"
              ></input>
              <label htmlFor="django">Django</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="docker"
                name="docker"
                value="Docker"
              ></input>
              <label htmlFor="docker">Docker</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="python"
                name="python"
                value="Python"
              ></input>
              <label htmlFor="python">Python</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="react"
                name="react"
                value="React"
              ></input>
              <label htmlFor="react">React</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="reactNative"
                name="reactNative"
                value="React Native"
              ></input>
              <label htmlFor="reactNative">React Native</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="javascript"
                name="javascript"
                value="JavaScript"
              ></input>
              <label htmlFor="javascript">JavaScript</label>

              <input
                onChange={handleTecnologias}
                type="checkbox"
                id="machineLearning"
                value="Machine Learning"
                name="machineLearning"
              ></input>
              <label htmlFor="machineLearning">Machine Learning</label>
            </div>
          </div>
          <button type="submit" className="challenge-button">
            Cadastrar teste técnico
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewChallenge;
