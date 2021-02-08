import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../sidebar/Sidebar";
import "./DashboardBusiness.css";
import Header from "../header/Header";

import number1 from "../../images/1.svg";
import number2 from "../../images/2.svg";
import number3 from "../../images/3.svg";

function DashboardBusiness() {
  const [company, setCompany] = useState({});
  const [candidates, setCandidates] = useState([]);
  let newArray = [...candidates];
  let sortedArray = newArray.sort(function (a, b) {
    if (a.somaTotal > b.somaTotal) {
      return 1;
    }
  });

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
          "https://contrate-me-api.herokuapp.com/candidates"
        );
        setCandidates(response.data);
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
        {/* <nav className="business-dashboard-nav">
          <p>Olá, {company.nome}</p>
        </nav>
         */}
        <Header />
        <div className="business-dashboard-content">
          <div>
            <h1>Visão geral dos testes</h1>
            <div className="business-dashboard-infos">
              <div className="business-dashboard-tests">
                <p>Cadastrados</p>
                <p className="number">2</p>
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
                {sortedArray.slice(0, 3).map((i, index) => (
                  <div className="business-card">
                    <div className="card-head">
                      <img
                        src={
                          index + 1 === 1
                            ? `${number1}`
                            : index + 1 === 2
                            ? `${number2}`
                            : `${number3}`
                        }
                      />
                      <h3>{i.nome}</h3>
                    </div>
                    <p className="card-business-function">{i.areaInteresse}</p>
                    <p className="card-business-score">
                      {i.testesResolvidos} testes/<strong>{i.somaTotal}</strong>
                    </p>
                  </div>
                ))}
              </div>
              <div className="business-ranking-other-positions">
                <table>
                  <thead>
                    <tr>
                      <th className="th-position">Posição</th>
                      <th className="th-business">Candidato</th>
                      <th className="th-area">Área de atuação</th>
                      <th className="th-testes">Testes resolvidos</th>
                      <th className="th-score">Nota geral</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedArray.slice(3, 4).map((i, index) => (
                      <tr className="blue-bg">
                        <td>
                          <strong>{index + 4}°</strong>
                        </td>
                        <td>
                          <strong>{i.nome}</strong>
                        </td>
                        <td>
                          <p className="small">{i.areaInteresse}</p>
                        </td>
                        <td>
                          <strong>{i.testesResolvidos}</strong>
                        </td>
                        <td>
                          <strong>{i.somaTotal}</strong>
                        </td>
                      </tr>
                    ))}
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
