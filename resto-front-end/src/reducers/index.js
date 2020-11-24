import {combineReducers} from 'redux';
import allRestoReducer from './allRestoReducer';
import changePageReducer from './changePageReducer';
import visitedRestaurantsReducer from './visitedRestaurantsReducer';
import addVisitedReducer from './addVisitedReducer';
import searchReducer from './searchReducer';
import showReducer from './showReducer';
import paginationReducer from './paginationReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    allRestoReducer,
    changePageReducer,
    visitedRestaurantsReducer,
    addVisitedReducer,
    searchReducer,
    showReducer,
    paginationReducer,
    loadingReducer,
    errorReducer
});

export default rootReducer;