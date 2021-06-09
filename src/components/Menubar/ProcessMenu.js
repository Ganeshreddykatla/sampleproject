import "./Menubar.css";



const ProcessMenu = () => {
  return (
    <nav className="menubar">
      
      <div className="menubar__left">
        <a className="active_link" href="#" >Safety Observation</a>
        <a href="#">Incident Reporting</a>
        <a className="" href="#">
           Safety Training
        </a>
        <a className="" href="#">
           Safety Governance Structure
        </a>
        <a className="" href="#">
          Mock Dill Plan
        </a>
        <a className="" href="#">
           Documentation
        </a>
      </div>
    
    </nav>
  );
};

export default ProcessMenu;
