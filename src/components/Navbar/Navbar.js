    import React, {useState} from 'react'
    import "./Navbar.css";
    import avatar from "../../assets/img_avatar.png";
    import logo from "../../assets/logo.png";
    import Drawer from "@material-ui/core/Drawer";
    import Hidden from "@material-ui/core/Hidden";
    import Toolbar from "@material-ui/core/Toolbar";
    import { makeStyles, useTheme } from "@material-ui/core/styles";
    import { Link, Router, useHistory, useLocation , NavLink} from "react-router-dom";
    import Siderbar from '../Sidebar/Sidebar';

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

    
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
   

    const Navbar = () => {
      const location = useLocation();
      const [openSidebar , setOpenSidebar] = useState(false);

      const handleSidebar =()=> {
        setOpenSidebar(!openSidebar);
      }
      

      console.log("loca]tion", location);
      return (
      <>
        <div className="sidebar_icon"> 
        <Siderbar/>
        </div> 
       <nav className="navbar">
        
          <div className="navbar__left">
            <div className="logo">
              <a href="#">
                <img src={logo} />
              </a>
            </div>
          </div>
          <div className="navbar__left">
            {menu_data.map((nav) => {
              return (
                <NavLink to={nav.path} activeClassName ="active">
                  {nav.name}
                </NavLink>
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
     </> );
    };

    export default Navbar;
