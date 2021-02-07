import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../src/components/homepage/Homepage";
import BusinessHome from "../src/components/business/BusinessHome";
import Candidate from "../src/components/candidate/Candidate";
import Company from "../src/components/company/Company";
import NewChallenge from "../src/components/new_challenge/NewChallenge";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          {/* Candidato */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/candidato" component={Candidate} />

          {/* <Route path="/desafios" component={Desafios} /> */}

          {/* Empresa */}
          <Route exact path="/business" component={BusinessHome} />
          <Route exact path="/empresa" component={Company} />
          <Route path="/novo_desafio" component={NewChallenge} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
