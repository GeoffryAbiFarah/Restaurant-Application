import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const SearchBar = () => {
  return (
    <div >
      <AppBar position="static" color="default" >
        <Toolbar >
      <Grid container >
        <Grid item xs={12} sm={4}>
          <Grid container justify="center" >
            <TextField  color="secondary" id="standard-basic" label="Search" variant="outlined"/>
          </Grid>
        </Grid>
            
        <Grid item xs={12} sm={4}>
          <Grid container justify="center">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select  variant="outlined" labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem width="100%"value={"none"}>No specific type</MenuItem>
              <MenuItem value={"lebanese"}>Lebanese</MenuItem>
              <MenuItem value={"italien"}>Italien</MenuItem>
              <MenuItem value={"chinese"}>Chinese</MenuItem>
            </Select>

          </Grid>
        </Grid>
            
        <Grid item xs={12} sm={4}>
          <Grid container justify="center">
            <Button type="submit" variant="contained" color="secondary">Search</Button>
          </Grid>
        </Grid>
      </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;