import "./Navbar.css";
import avatar from "../../assets/img_avatar.png";
import logo from "../../assets/logo.png";
import { Link, Router, useHistory, useLocation} from "react-router-dom";

const menu_data = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Process",
    path: "/process",
  },
  {
    name: "Safety Score Board",
    path: "/safety-score",
  },
];

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const location = useLocation();

   console.log ('loca]tion', location)
  return (
    
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <div className="logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
      </div>
      <div className="navbar__left">
        {menu_data.map((nav) => {
          const activeClass = location.pathname.toLowerCase().includes(nav.path) || nav.path === '/process'
            ? "active"
            : "";

          return (
            <Link className={activeClass} to={nav.path}>
              {nav.name}
            </Link>
          );
        })}
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <div class="avatar_box">
          <div className="avatar_name">David morse</div>
          <div className="avatar_role">Admin</div>
        </div>
        <a href="#!" className="avatar_img">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
