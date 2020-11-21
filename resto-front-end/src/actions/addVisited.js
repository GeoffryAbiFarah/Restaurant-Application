import {CHECKED, POSTED_SUCCESS} from '../types';

export const addVisited = (restaurant) => {
    return({
        type: CHECKED,
        restaurant : restaurant
    })
}

export const addVisitedSuccess = () => {
    return({
        type : POSTED_SUCCESS
    })
}
