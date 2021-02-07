import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import Sidebar from "../sidebar_candidate/SidebarCandidate";
import Header from "../header/Header";
import './Challenges.css';

function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const candidato = localStorage.getItem('candidatoId');
   

    useEffect(() => {
        async function SearchChallenges(){
            const response = await api.get(`/challenges`)
            setChallenges(response.data);
        }

        SearchChallenges();
    }, []);

    async function createSolution(id){
      const dataAtual = new Date();
      
      const response = await api.post(`/solutions`, {
          dataInicio: dataAtual.get(),
          status: 'Em andamento',
          candidatoId: candidato,
          desafioId: id
      })

      setSolutions(response.data);
    }

  return (
    <div className="challenges-section">
        <Sidebar /> 
        <div className="challenges-content">
          <Header /> 
          <div>
            <h1>Buscar testes</h1>
            <div className="challenges-list">
                {
                    challenges.map(challenge =>(
                        <div className="challenge">
                            <h3>{challenge.nome}</h3>
                            <p>{challenge.descricao}</p>
                            <a href={challenge.linkExterno} alt="Link externo">Link externo</a>
                        </div>
                    ))
                }
            </div>

          </div>
        </div>
    </div>
  );
}

export default Challenges;
