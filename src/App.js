import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../src/components/homepage/Homepage";
import BusinessHome from "../src/components/business/BusinessHome";
import Candidate from "../src/components/candidate/Candidate";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/empresa" component={BusinessHome} />
          <Route exact path="/candidato" component={Candidate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
