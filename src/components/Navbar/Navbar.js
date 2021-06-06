    import "./Navbar.css";
    import avatar from "../../assets/img_avatar.png";
    import logo from "../../assets/logo.png";


    const Navbar = ({ sidebarOpen, openSidebar }) => {
      return (
        <nav className="navbar">
          <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="navbar__left">
              <div className="logo">
              <a href="#"><img src={logo}/></a>
              </div>
            
          </div>
          <div className="navbar__left">
            <a href="#" className="">Dashboard</a>
            <a href="#">Process</a>
            <a className="active_link" href="#">
              Safety Scoreboard
            </a>
          </div>
          <div className="navbar__right">
            <a href="#">
              <i className="fa fa-bell" aria-hidden="true"></i>
            </a>
          <div class= "avatar_box">
              <div className= "avatar_name">
                David morse
              </div>
              <div className="avatar_role">
                Admin
              </div>
              </div>
            <a href="#!" className ="avatar_img">
              <img  src={avatar} alt="avatar" />
            </a>
          </div>
        </nav>
      );
    };

    export default Navbar;
