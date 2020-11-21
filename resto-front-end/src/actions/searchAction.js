import {REQUEST_SEARCHED_RESTOS, RECEIVE_SEARCHED_RESTOS} from '../types';

export const requestSearch = () => {
    return({
        type: REQUEST_SEARCHED_RESTOS
    })
}

export const receiveSearch = (data) => {
    return({
        type: RECEIVE_SEARCHED_RESTOS,
        data: data
    })
}
