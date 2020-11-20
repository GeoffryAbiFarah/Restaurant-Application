import {CHANGE_PAGE2 } from '../types';

const   INITIAL_STATE = true;

const changePageReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE1_ASYNC':
            return true;
        case CHANGE_PAGE2:
            return false;
        default:
            return state;
    }
}

export default changePageReducer;