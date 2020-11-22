import React, {useEffect} from 'react';
import {REQUEST_SEARCHED_RESTOS} from '../types';
import {useSelector, useDispatch} from 'react-redux';
import {addVisited} from '../actions/addVisited';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';



function SearchedRestaurants() {
    
    const searchedRestaurants = useSelector((state) => state.searchReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_SEARCHED_RESTOS})
    })

    const handleChange = (e) => {
        if (e.target.checked){
            var today = new Date();
            let day = today.getDate();
            let month = today.getMonth()+1;
            let year = today.getFullYear();
            let restaurant = {name: e.target.value , date: year+"-" +month+"-"+day} 
            dispatch(addVisited(restaurant));
            console.log(restaurant)
        }
    }

    return (
    <div>
        <Grid container >
        {searchedRestaurants.map(resto => (
            <div key={resto.id}>
                <Grid item xs={12} sm={6} >
                <Grid container alignItems="center" alignContent="center">
                <img src={resto.image_path} alt={resto.name} width="400px" height="250px"/>
                <br/>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel 
                            id={resto.name}
                            value={resto.name}
                            control={<Checkbox color="secondary" />}
                            label={resto.name}
                            labelPlacement="start"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </FormControl>
                </Grid>
            </Grid> 
            </div>
        ))}
        
        </Grid>
        
    </div>
  );
}

export default SearchedRestaurants;