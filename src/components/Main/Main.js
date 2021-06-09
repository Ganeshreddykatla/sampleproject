import "./Main.css";

import React from "react";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Process from "../../containers/Process/Process";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/process" component={Process} />
          <Redirect from="/" to="/process" />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
