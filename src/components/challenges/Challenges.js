import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import Sidebar from "../sidebar_candidate/SidebarCandidate";
import Header from "../header/Header";
import './Challenges.css';

function Challenges() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        async function SearchChallenges(){
            const response = await api.get(`/challenges`)
            setChallenges(response.data);
        }

        SearchChallenges();
    }, []);

  return (
    <div className="challenges-section">
        <Sidebar /> 
        <div className="challenges-content">
          <Header /> 
          <div>

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
