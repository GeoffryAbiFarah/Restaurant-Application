import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {useDispatch} from 'react-redux';
import {CHANGE_PAGE1,CHANGE_PAGE2} from '../types';




function NavBar (){
  // const { page } = useSelector((state) => state.changePageReducer);
  const dispatch = useDispatch();
  return (
    <div >
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container >
            <Grid item xs={6}>
              <Grid container justify="center">
                <Button onClick={() => dispatch({type: CHANGE_PAGE1})} color="inherit">Page 1</Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Button onClick={() => dispatch({type: CHANGE_PAGE2})} color="inherit">Page 2</Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;