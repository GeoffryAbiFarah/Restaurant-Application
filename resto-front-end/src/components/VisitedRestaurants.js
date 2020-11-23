import React, {useEffect} from 'react';
import {REQUEST_VISITED_RESTOS} from '../types';
import {useSelector, useDispatch} from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  grid: {
      width: "100%",
      margin: '0px'
  }
});

function VisitedRestaurants() {
  const isLoading = useSelector(state => state.loadingReducer);

    const visited = useSelector((state) => state.visitedRestaurantsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_VISITED_RESTOS})
    }, [])

    const classes = useStyles();
  

    if (isLoading){
       return (
       <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
       )}
    else{
        return (
        <div>
             
            <Grid container className={classes.grid} justify="center">
                <Grid item xs={11} sm={5} align="center">
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center"> Name </StyledTableCell>
                            <StyledTableCell align="center">Visit Date</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {visited.map(resto => (
                            <StyledTableRow key={resto.id}>
                            <StyledTableCell  align="center">
                                {resto.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{resto.date}</StyledTableCell>
                            
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
            </Grid>
        </div>
    )}
  }


export default VisitedRestaurants;

