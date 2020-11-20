import {RECEIVE_ALL_RESTOS} from '../types';


const   INITIAL_STATE = [];

const allRestoReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_ALL_RESTOS:
            return action.data;
        default:
            return state;
    }
}

export default allRestoReducer;