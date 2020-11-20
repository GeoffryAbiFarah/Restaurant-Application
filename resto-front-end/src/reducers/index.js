import {combineReducers} from 'redux';
import restaurantsReducer from './restaurantsReducer';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
    restaurantsReducer,
    changePageReducer
});

export default rootReducer;