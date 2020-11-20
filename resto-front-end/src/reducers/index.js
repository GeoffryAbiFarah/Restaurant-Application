import {combineReducers} from 'redux';
import restaurantsReducer from './restaurantsReducer';
import changePageReducer from './changePageReducer';
import visitedRestaurantsReducer from './visitedRestaurantsReducer';

const rootReducer = combineReducers({
    restaurantsReducer,
    changePageReducer,
    visitedRestaurantsReducer
});

export default rootReducer;