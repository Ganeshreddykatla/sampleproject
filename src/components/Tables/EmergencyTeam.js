    import React from 'react';
    import { withStyles, makeStyles } from '@material-ui/core/styles';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableContainer from '@material-ui/core/TableContainer';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Paper from '@material-ui/core/Paper';




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
        backgroundColor:"#fdf9f8",
        },

    }))(TableRow);

    function createData(name, designation, department, location, contact) {
    return { name, designation, department, location, contact };
    }

    const rows = [
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    createData('K.K Bhoumik','General Manager ', 'Warehouse & Supply','Kolkata' , '1234567891'),
    
    


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
        <TableContainer component={Paper}>
          Emergency Team
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
               
            <TableRow>
                <StyledTableCell  align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Designtion</StyledTableCell>
                <StyledTableCell align="center">Department</StyledTableCell>
                <StyledTableCell align="center">Location</StyledTableCell>
                <StyledTableCell align="center">Contact </StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody className ={classes.MuiTableCell}>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.designation}</StyledTableCell>
                <StyledTableCell align="center">{row.department}</StyledTableCell>

                <StyledTableCell align="center">{row.location}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}
