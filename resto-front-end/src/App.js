
import Container from './components/Container';
import ErrorSnackbar from './components/ErrorSnackbar'

import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {red, deepOrange, lightBlue} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      main : '#2196f3'
    },
    secondary:{
      main: '#ff5722'
    }
  }
})

function App() {
  return (

        <MuiThemeProvider theme = {theme}> 
          <ErrorSnackbar/>
        <Container/>
        </MuiThemeProvider>
        
  );
}

export default App;
