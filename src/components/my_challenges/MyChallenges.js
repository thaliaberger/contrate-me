import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import Sidebar from "../sidebar_candidate/SidebarCandidate";
import Header from "../header/Header";
import './MyChallenges.css';

function MyChallenges() {
    const [challenges, setChallenges] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [link, setLink] = useState();
    const candidato = localStorage.getItem('candidatoId');
   

    useEffect(() => {
        async function SearchChallenges(){
            const response = await api.get(`/solutions`);

            setChallenges(response.data);
        }

        SearchChallenges();
    }, []);

    async function sendSolution(id){
      const dataAtual = new Date();
      
      const response = await api.put(`/solutions`, {
          dataFim: dataAtual.get(),
          status: 'Aguardando avaliação',
          linkGithub: link
        })

      setSolutions(response.data);
    }

  return (
    <div className="my-challenges-section">
        <Sidebar /> 
        <div className="my-challenges-content">
          <Header /> 
          <div>
            <h1>Meus testes</h1>
            <div className="my-challenges-list">
                {
                    challenges.map(challenge =>(
                        <div className="challenge">
                           
                        </div>
                    ))
                }
            </div>

          </div>
        </div>
    </div>
  );
}

export default MyChallenges;
