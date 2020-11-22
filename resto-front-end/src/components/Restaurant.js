import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addVisited} from '../actions/addVisited';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: '5rem'
  },
  media: {
    height: 140,
  },
  grid: {
    width :'100%',
    margin: '0px'
  }
});

function Restaurant() {

    const allRestaurants = useSelector((state) => state.allRestoReducer);
    const searchedRestaurants = useSelector((state) => state.searchReducer);
    const classes = useStyles();

    const dispatch = useDispatch();

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
            <Grid container className={classes.grid}>
                {allRestaurants.map(resto => (
                    <Grid item key={resto.id} align="center" xs={12} sm={6}>
            <Card  className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={resto.image_path}
                    />

                    </CardActionArea>
                    <CardActions>
                        <Typography gutterBottom variant="h5" component="h5">
                        {resto.name}
                        </Typography>
                        
        
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" row>
                                <FormControlLabel 
                                    id={resto.name}
                                    value={resto.name}
                                    control={<Checkbox color="secondary" />}
                                    label="Visited ? "
                                    labelPlacement="start"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </FormControl>
                    </CardActions>
            </Card>
            </Grid>))}
            </Grid>
            
        </div>
    )
}

export default Restaurant;
