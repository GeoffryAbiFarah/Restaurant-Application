import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const SearchBar = () => {
  return (
    <div >
      <AppBar position="static" color="default" >
        <Toolbar >

      
      <Grid container >
            <Grid item xs={4} >
              <Grid container justify="center" >
                <TextField color="secondary" id="standard-basic" label="Search" variant="standard"/>
              </Grid>
            </Grid>
            <FormControl>
            <Grid item xs={4}>
              <Grid container justify="center">
                
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

        >
          <MenuItem value={10}>No specific type</MenuItem>
          <MenuItem value={10}>Lebanese</MenuItem>
          <MenuItem value={20}>Italien</MenuItem>
          <MenuItem value={30}>Chinese</MenuItem>
        </Select>

              </Grid>
            </Grid>
            </FormControl>
            <Grid item xs={4}>
              <Grid container justify="center">
                <Button variant="contained" color="secondary">Search</Button>
              </Grid>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;