import {PAGINATION_NUMBER} from '../types';


const paginationReducer = (state = 1, action) => {
    switch (action.type) {
        case PAGINATION_NUMBER:
            return action.value;
        default:
            return state;
    }
}

export default paginationReducer;