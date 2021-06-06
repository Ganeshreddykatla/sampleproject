import "./Menubar.css";

const Menubar = () => {
  return (
    <nav className="menubar">
      <div className="menubar__left">
        <a className="" href="#">
          Safety Observation
        </a>
        <a href="#" className="active_link">
          Incident Reporting
        </a>
        <a className="" href="#">
          Safety Training
        </a>
        <a className="" href="#">
          Safety Governance Structure
        </a>
        <a className="" href="#">
          Mock Drill Plan
        </a>
        <a className="" href="#">
          Documentation
        </a>
      </div>
    </nav>
  );
};

export default Menubar;
