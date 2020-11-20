import {REQUEST_ALL_RESTOS, RECEIVE_ALL_RESTOS} from '../types';

export const requestAll = () => {
    return({
        type: REQUEST_ALL_RESTOS
    })
}

export const receiveAll= (data) => {
    return({
        type: RECEIVE_ALL_RESTOS,
        data: data
    })
}

