import {REQUEST_SEARCHED_RESTOS, RECEIVE_SEARCHED_RESTOS} from '../types';

export const requestSearch = (data) => {
    return({
        type: REQUEST_SEARCHED_RESTOS,
        data: data,
        active: true
    })
}

// export const requestSearchByName = (data) => {
//     return({
//         type: REQUEST_SEARCHED_NAME_RESTOS,
//         data: data
//     })
// }

// export const requestSearchByType = (data) => {
//     return({
//         type: REQUEST_SEARCHED_TYPE_RESTOS,
//         data: data
//     })
// }

export const receiveSearch = (data) => {
    return({
        type: RECEIVE_SEARCHED_RESTOS,
        data: data
    })
}
