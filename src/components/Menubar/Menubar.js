  import "./Menubar.css";

  const Menubar = ({ sidebarOpen, openSidebar }) => {
    return (
      <nav className="menubar">
        
        <div className="menubar__left">
          <a className="active_link" href="#" >HSE Monthly</a>
          <a href="#">HSE Annual</a>
          <a className="" href="#">
          Global Safety
          </a>
        </div>
      
      </nav>
    );
  };

  export default Menubar;
