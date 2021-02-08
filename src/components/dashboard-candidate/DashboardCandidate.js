import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SidebarCandidate from "../sidebar_candidate/SidebarCandidate";
import HeaderCandidate from "../header-candidate/HeaderCandidate";
import "./DashboardCandidate.css";

import number1 from "../../images/1.svg";
import number2 from "../../images/2.svg";
import number3 from "../../images/3.svg";

function DashboardCandidate() {
  const [candidate, setCandidate] = useState({});
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
        setCandidate(response.data[3]);
        setCandidates(response.data);
      } catch (err) {}
    }
    fetchData();
  }, []);

  return (
    <div className="candidate-dashboard-container">
      <SidebarCandidate />
      <div>
        <HeaderCandidate />
        <div className="candidate-dashboard-content">
          <div>
            <h1>Visão geral dos testes</h1>
            <div className="candidate-dashboard-infos">
              <div className="candidate-dashboard-tests">
                <p>Cadastrados</p>
                <p className="number">5</p>
              </div>
              <div className="candidate-dashboard-tests">
                <p>Em andamento</p>
                <p className="number">1</p>
              </div>
              <div className="candidate-dashboard-tests">
                <p>Aguardando Avaliação</p>
                <p className="number">2</p>
              </div>
            </div>
          </div>
          <div className="candidate-ranking">
            <h2 className="candidate-ranking-title">Ranking de candidatos</h2>
            <small>
              Atualizado em {date.getDate()} de {monName[date.getMonth()]} de{" "}
              {date.getFullYear()}{" "}
            </small>
            <div className="candidate-ranking-positions">
              <div className="candidate-cards">
                {sortedArray.slice(0, 3).map((i, index) => (
                  <div className="candidate-card">
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
                    <p className="card-candidate-function">{i.areaInteresse}</p>
                    <p className="card-candidate-score">
                      {i.testesResolvidos} testes/<strong>{i.somaTotal}</strong>
                    </p>
                  </div>
                ))}
              </div>
              <div className="candidate-ranking-other-positions">
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
                    {sortedArray.slice(3, 4).map((i, index) => (
                      <tr className="purple-bg">
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

export default DashboardCandidate;
