import React, { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import Sidebar from "../sidebar/Sidebar";
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
                            <h1>{challenge.nome}</h1>
                            <h1>{challenge.descricao}</h1>
                            <h1>{challenge.linkExterno}</h1>
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
