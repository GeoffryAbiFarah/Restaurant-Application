import {POSTED_SUCCESS} from '../types';


const posted=false;

const addVisitedReducer = (state=posted, action) => {
    switch (action.type) {
        case POSTED_SUCCESS:
            return !state;
        default:
            return state;
    }
}

export default addVisitedReducer;