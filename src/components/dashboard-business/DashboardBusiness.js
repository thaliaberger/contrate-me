import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../sidebar/Sidebar";
import "./DashboardBusiness.css";

import number1 from "../../images/1.svg";
import number2 from "../../images/2.svg";
import number3 from "../../images/3.svg";

function DashboardBusiness() {
  const [company, setCompany] = useState({});

  let date = new Date();
  let monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "Maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro"
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/solutions"
        );

        // console.log(response.data);
        // setState();
      } catch (err) {}
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://contrate-me-api.herokuapp.com/companies"
        );

        console.log(response.data);
        setCompany(response.data[1]);
        console.log(company);
      } catch (err) {}
    }
    fetchData();
  }, []);

  return (
    <div className="business-dashboard-container">
      <Sidebar />
      <div>
        <nav className="business-dashboard-nav">
          <p>Olá, {company.nome}</p>
        </nav>
        <div className="business-dashboard-content">
          <div>
            <h1>Visão geral dos testes</h1>
            <div className="business-dashboard-infos">
              <div className="business-dashboard-tests">
                <p>Cadastrados</p>
                <p className="number">0</p>
              </div>
            </div>
          </div>
          <div className="business-ranking">
            <h2 className="business-ranking-title">Ranking de candidatos</h2>
            <small>
              Atualizado em {date.getDate()} de {monName[date.getMonth()]} de{" "}
              {date.getFullYear()}{" "}
            </small>
            <div className="business-ranking-positions">
              <div className="business-cards">
                <div className="business-card">
                  <div className="card-head">
                    <img src={number1} />
                    <h3>Nome</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                    0 testes/<strong>9.75</strong>
                  </p>
                </div>
                <div className="business-card">
                  <div className="card-head">
                    <img src={number2} />
                    <h3>Nome</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                    0 testes/<strong>9.75</strong>
                  </p>
                </div>
                <div className="business-card">
                  <div className="card-head">
                    <img src={number3} />
                    <h3>Nome</h3>
                  </div>
                  <p className="card-candidate-function">Função</p>
                  <p className="card-candidate-score">
                    0 testes/<strong>9.75</strong>
                  </p>
                </div>
              </div>
              <div className="business-ranking-other-positions">
                <table>
                  <thead>
                    <tr>
                      <th className="th-position">Posição</th>
                      <th className="th-candidate">Candidato</th>
                      <th className="th-area">Área de atuação</th>
                      <th className="th-testes">Testes resolvidos</th>
                      <th className="th-score">Nota geral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="blue-bg">
                      <td>
                        <strong>4°</strong>
                      </td>
                      <td>
                        <strong>Nome</strong>
                      </td>
                      <td>
                        <p className="small">Função</p>
                      </td>
                      <td>
                        <strong>0</strong>
                      </td>
                      <td>
                        <strong>9.75</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBusiness;
