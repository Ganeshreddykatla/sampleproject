import React from "react";
import "./Menubar.css";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link, NavLink, useLocation, useHistory } from "react-router-dom";

const menu_data = [
  {
    name: "Safety Observation",
    path: "/safety-observation",
  },
  {
    name: "Incident Reporting",
    path: "/add-incident",
  },
  {
    name: "Safety Score Board",
    path: "/safety-score",
    subMenus: [
      {
        name: "safety document1",
        path: "/safety-score1",
      },
      {
        name: "safety document1",
        path: "/safety-score1",
      },
      {
        name: "safety document1",
        path: "/safety-score1",
      },
    ],
  },
];

const ProcessMenu = () => {
  const location = useLocation();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickMenuItem = ({path}) => {
    history.push(path)
  }

  return (
    <nav className="menubar">
      <div className="menubar__left">
        {menu_data.map((nav, i) => {
          return (
            <>
              {nav.subMenus ? (
                <Button
                  aria-controls={`simple-menu-${i}`}
                  aria-haspopup="true"
                  onClick={handleClick}
                >{nav.name}</Button>
              ) : (
                <NavLink to={nav.path} activeClassName="active">
                  {nav.name}
                </NavLink>
              )}

              {nav.subMenus && (
                <Menu
                  id={`simple-menu-${i}`}
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {nav.subMenus.map((item) => {
                    return <MenuItem onClick={()=>onClickMenuItem(item)}>
                      {item.name}
                    {/* <NavLink to={item.path}>{item.name}</NavLink> */}
                    </MenuItem>
                  })}
                </Menu>
              )}
            </>
          );
        })}
      </div>
    </nav>
  );
};

export default ProcessMenu;
