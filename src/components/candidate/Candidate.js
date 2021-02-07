import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Candidate() {
  const [state, setState] = useState({
    nome: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    estado: "AC",
    nivelFormacao: "",
    areaFormacao: "",
    areaAtuacao: "",
    areaInteresse: "",
    tecnologias: [],
  });

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
      "https://contrate-me-api.herokuapp.com/candidates",
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
          name="nome"
          type="text"
          className=""
          id="novoNome"
          onChange={handleChange}
          value={state.nome}
        />
      </div>

      {/* Data de Nascimento */}
      <div className="">
        <label htmlFor="novaDataDeNascimento">Data de nascimento</label>
        <input
          type="text"
          className=""
          id="novaDataDeNascimento"
          name="dataDeNascimento"
          onChange={handleChange}
          value={state.dataNascimento}
        />
      </div>

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

      <label htmlFor="nivelFormacao">Nível de Formação:</label>

      <select onChange={handleChange} name="nivelFormacao" id="nivelFormacao">
        <option disabled selected>
          Escolha
        </option>
        <option value="Nível médio">Nível médio</option>
        <option value="Nível técnico">Nível técnico</option>
        <option value="Graduação incompleta">Graduação incompleta</option>
        <option value="Graduação completa">Graduação completa</option>
        <option value="Pós-graduação completa">Pós-graduação completa</option>
        <option value="Pós-graduação incompleta">
          Pós-graduação incompleta
        </option>
        <option value="Mestrado">Mestrado</option>
        <option value="Doutorada">Doutorada</option>
      </select>

      <label htmlFor="areaFormacao">Área de Formação:</label>

      <select onChange={handleChange} name="areaFormacao" id="areaFormacao">
        <option disabled selected>
          Escolha
        </option>
        <option value="estudante">Estudante</option>
        <option value="adminintração">Adminintração</option>
        <option value="Artes e Design">Artes e Design</option>
        <option value="Ciências exatas e Informática">
          Ciências exatas e Informática
        </option>
        <option value="Ciências sociais e humanas">
          Ciências sociais e humanas
        </option>
        <option value="Comunicação e Informação">
          Comunicação e Informação
        </option>
        <option value="Engenharias">Engenharias</option>
        <option value="Meio Ambiente">Meio Ambiente</option>
        <option value="Saúde e Bem-estar">Saúde e Bem-estar</option>
        <option value="Outros">Outros</option>
      </select>

      <label htmlFor="areaAtuacao">Área de Formação:</label>

      <select onChange={handleChange} name="areaAtuacao" id="areaAtuacao">
        <option disabled selected>
          Escolha
        </option>
        <option value="estudante">Estudante</option>
        <option value="adminintração">Adminintração</option>
        <option value="Artes e Design">Artes e Design</option>
        <option value="Ciências exatas e Informática">
          Ciências exatas e Informática
        </option>
        <option value="Ciências sociais e humanas">
          Ciências sociais e humanas
        </option>
        <option value="Comunicação e Informação">
          Comunicação e Informação
        </option>
        <option value="Engenharias">Engenharias</option>
        <option value="Meio Ambiente">Meio Ambiente</option>
        <option value="Saúde e Bem-estar">Saúde e Bem-estar</option>
        <option value="Outros">Outros</option>
      </select>

      <label htmlFor="areaInteresse">Área de Formação:</label>

      <select onChange={handleChange} name="areaInteresse" id="areaInteresse">
        <option disabled selected>
          Escolha
        </option>
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Full Stack">Full-Stack</option>
      </select>

      <p>Tecnologias</p>
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
        name="comptia"
      ></input>
      <label htmlFor="comptia">CompTIA</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="deepLearning"
        name="deepLearning"
      ></input>
      <label htmlFor="deepLearning">Deep Learning</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="django"
        name="django"
      ></input>
      <label htmlFor="django">Django</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="docker"
        name="docker"
      ></input>
      <label htmlFor="docker">Docker</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="machineLearning"
        name="machineLearning"
      ></input>
      <label htmlFor="machineLearning">Machine Learning</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="python"
        name="python"
      ></input>
      <label htmlFor="python">Python</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="react"
        name="react"
      ></input>
      <label htmlFor="react">React</label>

      <input
        onChange={handleTecnologias}
        type="checkbox"
        id="reactNative"
        name="reactNative"
      ></input>
      <label htmlFor="reactNative">React Native</label>

      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}

export default Candidate;
