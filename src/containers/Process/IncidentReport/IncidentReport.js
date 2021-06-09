import React from 'react';
import './IncidentReport.css'

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { OutlinedInput } from '@material-ui/core';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f8f0ee",
    color: '#8fc3f4',
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
   
    '&:nth-of-type(even)': {
      backgroundColor:"#fdf9f8",
    },
    'td': {
      borderBottom : 'none',
    },
  },
}))(TableRow);

function createData(incident, reportBy, nature, location, person) {
  return { incident, reportBy, nature, location, person };
}

const rows = [
  createData('12309845743', 'K.K Bhoumik','Fatality', 'Kolkata','Rajdeep Benerjee' ),
  createData('32467394024', 'Abhinandan Sakthi','Accident', 'Kolkata','Alpan Bose' ),
  createData('12309845743', 'K.K Bhoumik','Fatality', 'Kolkata','Rajdeep Benerjee' ),
  createData('32467394024', 'Abhinandan Sakthi','Accident', 'Kolkata','Alpan Bose' ),
  createData('12309845743', 'K.K Bhoumik','Fatality', 'Kolkata','Rajdeep Benerjee' ),
  createData('32467394024', 'Abhinandan Sakthi','Accident', 'Kolkata','Alpan Bose' ),
  createData('12309845743', 'K.K Bhoumik','Fatality', 'Kolkata','Rajdeep Benerjee' ),
  createData('32467394024', 'Abhinandan Sakthi','Accident', 'Kolkata','Alpan Bose' ),
  createData('12309845743', 'K.K Bhoumik','Fatality', 'Kolkata','Rajdeep Benerjee' ),
  createData('32467394024', 'Abhinandan Sakthi','Accident', 'Kolkata','Alpan Bose' ),
  


];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  inputbase:{
  },
  outlinedInput:{
    padding: 0,
  },
  search:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
      <div className="incedent_main">
          <div className ={classes.search}>
          <TextField
          style = {{padding: '10px 25px'}}
           id="outlined-basic" 
           className={classes.inputbase}
           classes={{outlinedInput:classes.outlinedInput}}
           label=""
            variant="outlined" 
            InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                 )
                }}
            />
          <Button variant="contained" color="secondary">
        Add Incident
      </Button>
          </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Incident No</StyledTableCell>
            <StyledTableCell align="center">Report By</StyledTableCell>
            <StyledTableCell align="center">Nature of Incident</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Person Involved In Incident</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className ={classes.MuiTableCell}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.incident}
              </StyledTableCell>
              <StyledTableCell align="center">{row.reportBy}</StyledTableCell>
              <StyledTableCell align="center">{row.nature}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.person}</StyledTableCell>
              <StyledTableCell align="center">
                  <div className ="view_data">View Details</div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
