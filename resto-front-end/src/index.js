import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const myStore = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //extension redux devtools



ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);





// //Action Increment
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //Reducer
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//         return state - 1;
//     default:
//       return state;
//   }

// }

// //Store -> Globalized stat
// let store = createStore(counter);


// //display in the console
// store.subscribe(() => console.log(store.getState()));

// //dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());




