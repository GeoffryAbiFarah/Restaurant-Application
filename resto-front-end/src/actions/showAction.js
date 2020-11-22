import {SHOW_ALL_RESTAURANTS,SHOW_SEARCHED_RESTAURANTS} from '../types';


export const showAllAction = () => {
    return({
        type: SHOW_ALL_RESTAURANTS,
    })
}

export const showVisitedAction = () => {
    return({
        type: SHOW_SEARCHED_RESTAURANTS,
    })
}