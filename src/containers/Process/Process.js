
            import React from 'react'
            import IncidentReport from '../Process/IncidentReport/IncidentReport';
            import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
            import ProcessMenu from '../../components/Menubar/ProcessMenu'


            const Process = () => {
            return (
                <div className="main">
                <ProcessMenu />
               <IncidentReport />
                </div>
            );
            };

            export default Process;
