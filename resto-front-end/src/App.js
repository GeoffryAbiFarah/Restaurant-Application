import {Provider} from 'react-redux';
import NavBar from './components/NavBar';
import Container from './components/Container';


import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Container/>
    </div>
    </Provider>
  );
}

export default App;
