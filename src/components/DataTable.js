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
import ResponsiveDrawer from "./ResponsiveDrawer";
import Grid from "@material-ui/core/Grid/Grid";
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  colWidth: {
    width: '10%'
  },
  rowHeight: {
    height: '10%'
  },
  paperContainer: {
    margin: "10px",
    overflowX: "auto"
  },
  tableHeaderColor: {
    backgroundColor: "#BFC9CA"
  },
  criteriaColumnColor: {
    backgroundColor: "#EAEDED"
  },
  cellHeaderColor: {
    backgroundColor: "#F2F3F4"
  },
  btnAbsent: {
    color: "#E74C3C"
  },
  btnCompleted: {
    color: green[500]
  },
  btnPending: {
    color: "#F1C40F",
    outlineColor: "F1C40F"
  }

});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Existing : 6 Registrations : 20 New Codes : 10', 159, 6.0, 24, 4.0),
  createData('Existing : 6 Registrations : 20 New Codes : 10', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const SimpleTable = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container justify={"center"}>
        <Grid item xs={12} md={10} style={{ padding: "8px" }}>
          <Paper style={{ overflowX: "auto" }}>
            <Table style={{ minWidth: "340px" }}>
              <TableHead>
                <TableRow className={classes.tableHeaderColor}>
                  <TableCell align="center" colSpan="2">Team Leader /Criteria</TableCell>
                  <TableCell align="center">Week 1</TableCell>
                  <TableCell align="center">Week 2</TableCell>
                  <TableCell align="center">Week 3</TableCell>
                  <TableCell align="center">Week 4</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.criteriaColumnColor} rowSpan="19"> Team Leader code and Name</TableCell>
                  <TableCell className={classes.cellHeaderColor} rowSpan="4"> Recruitment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Existing : 10</TableCell>
                  <TableCell> Existing : 10</TableCell>
                  <TableCell> Existing : 10</TableCell>
                  <TableCell> Existing : 10</TableCell>
                  <TableCell> Existing : 10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Registrations : 20</TableCell>
                  <TableCell> Registrations : 20</TableCell>
                  <TableCell> Registrations : 20</TableCell>
                  <TableCell> Registrations : 20</TableCell>
                  <TableCell> Registrations : 20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> New Codes : 30</TableCell>
                  <TableCell> New Codes : 30</TableCell>
                  <TableCell> New Codes : 30</TableCell>
                  <TableCell> New Codes : 30</TableCell>
                  <TableCell> New Codes : 30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cellHeaderColor} rowSpan="3"> Quatations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> 20% </TableCell>
                  <TableCell align="center"> 30% </TableCell>
                  <TableCell align="center"> 110% </TableCell>
                  <TableCell align="center"> 85%</TableCell>
                  <TableCell align="center"> 85%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cellHeaderColor} rowSpan="3"> Active Advisor</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> 20% </TableCell>
                  <TableCell align="center"> 30% </TableCell>
                  <TableCell align="center"> 110% </TableCell>
                  <TableCell align="center"> 85%</TableCell>
                  <TableCell align="center"> 85%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                  <TableCell align="center"> T : 25 | A : 15 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cellHeaderColor} rowSpan="5"> Pending Clearance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Proposals : 3 <LaunchOutlinedIcon /></TableCell>
                  <TableCell> Proposals : 3 <LaunchOutlinedIcon /></TableCell>
                  <TableCell> Proposals : 3 <LaunchOutlinedIcon /></TableCell>
                  <TableCell> Proposals : 3 <LaunchOutlinedIcon /></TableCell>
                  <TableCell> Proposals : 3 <LaunchOutlinedIcon /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Suspence : 250,000 </TableCell>
                  <TableCell> Suspence : 250,000 </TableCell>
                  <TableCell> Suspence : 250,000 </TableCell>
                  <TableCell> Suspence : 250,000 </TableCell>
                  <TableCell> Suspence : 250,000 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Renewals : 120,000 </TableCell>
                  <TableCell> Renewals : 120,000 </TableCell>
                  <TableCell> Renewals : 120,000 </TableCell>
                  <TableCell> Renewals : 120,000 </TableCell>
                  <TableCell> Renewals : 120,000 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Revivals : 25,000 </TableCell>
                  <TableCell> Revivals : 25,000 </TableCell>
                  <TableCell> Revivals : 25,000 </TableCell>
                  <TableCell> Revivals : 25,000 </TableCell>
                  <TableCell> Revivals : 25,000 </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cellHeaderColor} rowSpan="2" > Meeting Notes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <ol>
                      <li>Recruitment programe at school<CancelRoundedIcon color="secondary" /></li>
                      <li>Leads Campaign<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                      <li>New Advisor Training<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                    </ol>
                  </TableCell>
                  <TableCell>
                    <ol>
                      <li>Recruitment programe at school<CancelRoundedIcon color="secondary" /></li>
                      <li>Leads Campaign<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                      <li>New Advisor Training<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                    </ol>
                  </TableCell><TableCell>
                    <ol>
                      <li>Recruitment programe at school<CancelRoundedIcon color="secondary" /></li>
                      <li>Leads Campaign<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                      <li>New Advisor Training<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                    </ol>
                  </TableCell><TableCell>
                    <ol>
                      <li>Recruitment programe at school<CancelRoundedIcon color="secondary" /></li>
                      <li>Leads Campaign<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                      <li>New Advisor Training<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                    </ol>
                  </TableCell><TableCell>
                    <ol>
                      <li>Recruitment programe at school<CancelRoundedIcon color="secondary" /></li>
                      <li>Leads Campaign<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                      <li>New Advisor Training<CheckCircleRoundedIcon style={{ color: green[500] }} /></li>
                    </ol>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cellHeaderColor} rowSpan="2"> Action</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <Button className={classes.btnCompleted} variant="outlined">
                      Completed
              </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button className={classes.btnCompleted} variant="outlined">
                      Completed
              </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button className={classes.btnAbsent} variant="outlined" color="secondary">
                      Absent
              </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button className={classes.btnPending} variant="outlined">
                      Pending
              </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button className={classes.btnPending} variant="outlined">
                      Pending
              </Button>
                  </TableCell>
                </TableRow>
                {/* {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))} */}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default SimpleTable;
