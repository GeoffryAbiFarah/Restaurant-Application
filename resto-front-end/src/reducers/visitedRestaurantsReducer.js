import {RECEIVE_VISITED_RESTOS} from '../types';


const   INITIAL_STATE = [];

const visitedRestaurantsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_VISITED_RESTOS:
            return action.data;
        default:
            return state;
    }
}

export default visitedRestaurantsReducer;