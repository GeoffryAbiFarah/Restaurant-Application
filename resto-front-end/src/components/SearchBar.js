import React from 'react';
import {requestAll} from '../actions/restaurantsAction';
import {requestSearch} from '../actions/searchAction';
import {useDispatch} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let name = document.getElementById("name-id");
    let type = document.getElementById("type-id");
    console.log(name.value)
    console.log(type.value)
    let data = {name: name.value , type: type.value};
    
    if (name.value === "" && (type.value === "" || type.value=== "all")){
      dispatch(requestAll());
    }
    else{
      dispatch(requestSearch(data));
    }

    // if (name.value === "" && (type.value === "" || type.value=== "all")){
    //   dispatch(requestAll());
    // }
    // else if (name.value === ""){
    //   data = {type: type.value};
    //   dispatch(requestSearchByType(data));
    // }
    // else if (type.value=== "" || type.value=== "all"){
    //   data = {name: name.value};
    //   dispatch(requestSearchByName(data));
    // }
    // else{
    //   data = {
    //     name: name.value,
    //     type: type.value
    //   };
    //   dispatch(requestSearch(data));
    // }
}

  return (
    <div >
      <AppBar position="static" color="default" >
        <Toolbar >
      <Grid container >
        <Grid item xs={12} sm={4}>
          <Grid container justify="center" >
            <TextField  color="secondary" id = "name-id" label="Search" variant="outlined"/>
          </Grid>
        </Grid>
            
        <Grid item xs={12} sm={4}>
          <Grid container justify="center">
            <FormControl variant="outlined" >
              <InputLabel >Types</InputLabel>
                <Select
                  native
                  label="Type"
                  id = "type-id"
                  >
                  <option aria-label="None" value="" />
                  <option value={'all'}>All Types</option>
                  <option value={'lebanese'}>Lebanese</option>
                  <option value={'italien'}>Italien</option>
                  <option value={'chinese'}>Chinese</option>
                </Select>
      </FormControl>

          </Grid>
        </Grid>
            
        <Grid item xs={12} sm={4}>
          <Grid container justify="center">
            <Button onClick={handleSubmit} variant="contained" color="secondary">Search</Button>
          </Grid>
        </Grid>
      </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;