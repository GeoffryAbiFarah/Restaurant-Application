import {useSelector} from 'react-redux';
import NavBar from './NavBar';
import Page1 from './Page1';
import Page2 from './Page2';


function Container() {
  const page = useSelector((state) => state.changePageReducer);

  return (
      <div>
        <NavBar/>
        { page ? <Page1/> : <Page2/>}
    </div>
  );
}

export default Container;