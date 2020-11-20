import {CHANGE_PAGE1,CHANGE_PAGE2} from '../types';

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

export const changePage1Action = () => {
    return({
        type: CHANGE_PAGE1,
    })
}

export const changePage2Action = () => {
    return({
        type: CHANGE_PAGE2,
    })
}

