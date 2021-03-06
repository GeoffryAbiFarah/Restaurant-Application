import {RECEIVE_SEARCHED_RESTOS} from '../types';


const   INITIAL_STATE = [];

const searchReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_SEARCHED_RESTOS:
            return action.data;
        default:
            return state;
    }
}

export default searchReducer;