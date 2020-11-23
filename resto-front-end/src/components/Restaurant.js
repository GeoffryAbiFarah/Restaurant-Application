import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addVisited} from '../actions/addVisited';

import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Pagination from '@material-ui/lab/Pagination';
import { paginationAction } from '../actions/paginationAction';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: '3rem',
    marginBottom: '2rem',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  media: {
    height: 140,
  },
  grid: {
    width :'100%',
    margin: '0px'
  },
  modalImg:{
    width:"100%"
  }
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



//Component
function Restaurant() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const allRestaurants = useSelector((state) => state.allRestoReducer);
    const searchedRestaurants = useSelector((state) => state.searchReducer);

    //to choose what to show
    const show = useSelector((state) => state.showReducer);
    let restaurants =[];
    if (show === true){
        restaurants = allRestaurants;
    }else{
        restaurants = searchedRestaurants;
        dispatch(paginationAction(1))
    }


    // for pagination
    const currentPage = useSelector((state) => state.paginationReducer)
    const [restoPerPage] = useState(4);

    //get current posts
    const indexOfLastResto = currentPage * restoPerPage;
    const indexOfFirstResto = indexOfLastResto - restoPerPage;
    const currentRestos = restaurants.slice(indexOfFirstResto, indexOfLastResto)

    //change page
    const paginate = (event, value) => {
      dispatch(paginationAction(value))
    }

    // for modal
    const [open, setOpen] = useState(false);
    const [currentResto, setCurrentResto] = useState({});
    const handleClickOpen = () => { 
      setOpen(true); 
    };
    const handleCurrentResto = (resto) =>{
      setCurrentResto(resto)
    }
    const handleClose = () => { setOpen(false); };


    
    // for adding visited
    const handleChange = (e) => {
        if (e.target.checked){
            var today = new Date();
            let day = today.getDate();
            let month = today.getMonth()+1;
            month = today.toLocaleString('default', { month: 'long' });
            let year = today.getFullYear();
            let restaurant = {name: e.target.value , date: month+ " " + day + ", "+year } 
            dispatch(addVisited(restaurant));
            console.log(restaurant)
        }
    }



    return (
        <div>
            <Grid container className={classes.grid}>
                {currentRestos.map(resto => (
                    <Grid item key={resto.id} align="center" xs={12} sm={6}>
            <Card  className={classes.root}>
                  <CardActionArea onClick={ () =>{
                    handleClickOpen();
                    handleCurrentResto(resto);
                  }
                  }>
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
            {/* Pagination */}
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '10vh' }}
            >

                <Grid item xs={12}>
                  <Pagination onChange={paginate} count={Math.ceil(restaurants.length / restoPerPage)} showFirstButton showLastButton variant="outlined" shape="rounded" />
                </Grid>   

            </Grid>
            
            
            {/* Modal Dialog */}
            <Dialog onClose={handleClose} maxWidth="lg" aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              </DialogTitle>
                  <DialogContent>
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={8} >
                      <img src={currentResto.image_path} className={classes.modalImg} alt={currentResto.name}/>
                    </Grid>
                    
                    <Grid item xs={12} sm={4}>
                      <Typography variant="h4" component="h4">
                        {currentResto.name}
                      </Typography>
                      <br/>
                      <Typography >
                        Type: {currentResto.type}
                      </Typography>
                    <br/>
                      <Typography gutterBottom>
                        Average Cost for Two: ${currentResto.cost}
                      </Typography>
                      <br/>
                      <Typography gutterBottom>
                        Address: {currentResto.address}
                      </Typography>
                      <br/>
                      <Typography gutterBottom>
                        Phone Number: {currentResto.number}
                      </Typography>
                      <br/>
                    </Grid>
                    </Grid>
                  </DialogContent>
                  </Dialog>
        </div>
    )
}

export default Restaurant;



