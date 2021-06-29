import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Demo() {
  const classes = useStyles();
  const [openItem, setOpenItem] = React.useState(null);

  const handleClick = (id) => {
    setOpenItem(val => val === id ? null : id);
  };

  const Data = [
    {
      id: 1,
      navItem: "Dashboard",
      path: "/dashboard",
      subMenu: [
        {
          id: 1,
          subItem: "hseMonth",
        },
        {
          id: 2,
          subItem: "hseYearly",
        },
      ],
    },
    {
      id: 1,
      navItem: "Process",
      path: "/process",
      subMenu: [
        {
          id: 1,
          navItem: "/process/add-incident",
        },
        {
          id: 2,
          subItem : 'Incident Reporting',
          navItem: "/process/priliminary/:id",
        },
      ],
    },
  ];
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}>

       { Data.map((item, index)=> {
       return (
        <div>
        <ListItem button onClick={()=>handleClick(index)}>
          <ListItemText primary={item.navItem} />
          {index === openItem ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={index === openItem} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              item.subMenu.map((nav) => {
                return  <ListItem button className={classes.nested}>
                <ListItemText primary= {nav.subItem}/>
              </ListItem>
              })
            }
           
          </List>
        </Collapse>
        </div>
       )
       }
       )} 
  
    </List>
  );
}
