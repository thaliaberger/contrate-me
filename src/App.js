import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "../src/components/homepage/Homepage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
