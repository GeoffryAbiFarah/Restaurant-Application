import {SHOW_ERROR, CLEAR_ERROR} from '../types';

const INITIAL_STATE = {
    info : {
        message : '',
        open : false
    }
}

const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                info: {
                    message : action.message,
                    open : true
                }
            };
        case CLEAR_ERROR:
            return {
                info : {
                    message : "",
                    open: false
                }
            };
        default:
            return state;
    }
}

export default errorReducer;