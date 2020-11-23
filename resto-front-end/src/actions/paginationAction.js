import {PAGINATION_NUMBER} from '../types';

export const paginationAction = (value) => {
    return({
        type: PAGINATION_NUMBER,
        value: value
    })
}