import {combineReducers} from 'redux';
import allRestoReducer from './allRestoReducer';
import changePageReducer from './changePageReducer';
import visitedRestaurantsReducer from './visitedRestaurantsReducer';
import addVisitedReducer from './addVisitedReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    allRestoReducer,
    changePageReducer,
    visitedRestaurantsReducer,
    addVisitedReducer,
    searchReducer
});

export default rootReducer;