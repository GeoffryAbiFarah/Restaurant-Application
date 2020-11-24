import VisitedRestaurants from './VisitedRestaurants';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Page2() {

  return (
    <div>
        <AppBar position="static" color="primary" >
        <Toolbar style= {{color: "white", justifyContent:"center"}}>
          
          <Typography gutterBottom variant="h5" component="h5" style= {{color: "white"}}>
                    Visited Restaurant
                    </Typography>
        </Toolbar>
        </AppBar>
        <br/>
        <VisitedRestaurants/>
        <br/>
    </div>
  )
}
 
export default Page2;