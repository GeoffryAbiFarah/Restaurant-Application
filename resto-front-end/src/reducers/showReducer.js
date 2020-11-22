import {SHOW_ALL_RESTAURANTS,SHOW_SEARCHED_RESTAURANTS} from '../types';

const   INITIAL_STATE = true;

const showReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALL_RESTAURANTS:
            return true;
        case SHOW_SEARCHED_RESTAURANTS:
            return false;
        default:
            return state;
    }
}

export default showReducer;