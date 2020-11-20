import {combineReducers} from 'redux';
import allRestoReducer from './allRestoReducer';
import changePageReducer from './changePageReducer';
import visitedRestaurantsReducer from './visitedRestaurantsReducer';

const rootReducer = combineReducers({
    allRestoReducer,
    changePageReducer,
    visitedRestaurantsReducer
});

export default rootReducer;