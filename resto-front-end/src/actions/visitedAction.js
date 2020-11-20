import {REQUEST_VISITED_RESTOS, RECEIVE_VISITED_RESTOS} from '../types';

export const requestVisited = () => {
    return({
        type: REQUEST_VISITED_RESTOS
    })
}

export const receiveVisited = (data) => {
    return({
        type: RECEIVE_VISITED_RESTOS,
        data: data
    })
}

