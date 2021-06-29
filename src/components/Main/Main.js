    import "./Main.css";

    import React from 'react'
    import Dashboard from '../../containers/Dashboard/Dashboard'
    import Process from '../../containers/Process/Process'
    import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
  import SafetyScoreBoard from "../../containers/SafetyScoreBoard/SafetyScoreBoard";
    import AddIncident from '../../containers/Process/IncidentReport/AddIncident';
    import Demo from '../../containers/Process/IncidentReport/Demo'
    import   SideBar from '../Sidebar/Sidebar'
 



    const Main = () => {
      return (
        <div className="main">
                <Switch >
                  <Route exact path= '/dashboard' component={Dashboard}/>
                  <Route exact path= '/add-incident' component = {AddIncident} />
                  <Route exact path= '/process' component ={Process}/>
                  <Route exact path= '/safety-score' component = {SafetyScoreBoard} />
                  <Route exact path= '/demo' component = {Demo} />
                  <Route exact path= '/sidebar' component = {SideBar} />
                  {/* <Route exact path= '/add-incident' component = {AddIncident} /> */}

                </Switch>
              
        </div>
      );
    };

    export default Main;
