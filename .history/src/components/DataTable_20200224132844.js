import React from 'react';
import './DataTable.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  colWidth: {
    width: '10%',
  },
});

function createData(area, name, calories, fat, carbs, protein) {
  return { area, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Recruitment','Existing : 6 Registrations : 20 New Codes : 10', 159, 6.0, 24, 4.0),
  createData('Quotations','Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Active advisors','Eclair', 262, 16.0, 24, 6.0),
  createData('Pending clearance','Cupcake', 305, 3.7, 67, 4.3),
  createData('Meeting Notes','Gingerbread', 356, 16.0, 49, 3.9),
  createData('Action','Gingerbread', 356, 16.0, 49, 3.9),
];

const SimpleTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team Leader /Criteria</TableCell>
            <TableCell align="ce">Week 1</TableCell>
            <TableCell align="right">Week 2</TableCell>
            <TableCell align="right">Week 3</TableCell>
            <TableCell align="right">Week 4</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell className={classes.colWidth} rowSpan="7"> Team Leader code and Name</TableCell>
            </TableRow>
            {rows.map(row => (
                <TableRow key={row.area}>
                <TableCell align="center">{row.area}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SimpleTable;
