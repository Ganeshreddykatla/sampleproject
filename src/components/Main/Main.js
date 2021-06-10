    import "./Main.css";

    import React from 'react'
    import Dashboard from '../../containers/Dashboard/Dashboard'
    import Process from '../../containers/Process/Process'
    import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
  import SafetyScoreBoard from "../../containers/SafetyScoreBoard/SafetyScoreBoard";
    import AddIncident from '../../containers/Process/IncidentReport/AddIncident';




    const Main = () => {
      return (
        <div className="main">
                <Switch >
                  <Route exact path= '/dashboard' component={Dashboard}/>
                  <Route exact path= '/process' component ={Process}/>
                  <Route exact path= '/safety-score' component = {SafetyScoreBoard} />
                  <Route exact path= '/add-incident' component = {AddIncident} />

                  <Redirect  from= '/' to="/process" />
                </Switch>
              
        </div>
      );
    };

    export default Main;
