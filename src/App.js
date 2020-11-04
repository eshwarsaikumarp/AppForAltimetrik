import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Views/LoginAndSignUp";
import DashBoard from "./Views/DashBoard";
import NoMatch from "./Views/NoMatch";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
