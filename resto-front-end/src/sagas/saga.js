import {takeEvery, put, takeLatest, call} from 'redux-saga/effects';
import {fetchData, fetchDataAll, postVisited, fetchDataSearch, fetchDataSearchName, fetchDataSearchType} from '../api';
import {receiveVisited} from '../actions/visitedAction';
import {REQUEST_VISITED_RESTOS, REQUEST_ALL_RESTOS, CHANGE_PAGE1, CHANGE_PAGE1_ASYNC, CHECKED, REQUEST_SEARCHED_RESTOS} from '../types';
import { receiveAll } from '../actions/restaurantsAction';
import {addVisitedSuccess} from '../actions/addVisited';
import {receiveSearch} from '../actions/searchAction';

//PAges
function* page1Async(){
    yield put({type: CHANGE_PAGE1_ASYNC});
}

export function* watchPage1(){
    yield takeEvery(CHANGE_PAGE1, page1Async);
}


// //searched Restaurants (Page1)
// function* searchAsync(action){
//     try {
//         const data = yield call (fetchDataSearch,action.data);
//         yield put(receiveSearch(data));
//     }catch (e){
//         console.log(e)
//     }
// }

// //searched by name Restaurants (Page1)
// function* searchNameAsync(action){
//     try {
//         const data = yield call (fetchDataSearchName,action.data);
//         yield put(receiveSearch(data));
//     }catch (e){
//         console.log(e)
//     }
// }

//searched by type Restaurants (Page1)
function* searchAsync(action){
    try {
        let searched = 0;
    if (action.data.name === ""){
      searched = yield call (fetchDataSearchType,action.data);
    }
    else if (action.data.type === "" || action.data.type === "all"){
      searched = yield call (fetchDataSearchName,action.data);
    }
    else{
      searched = yield call (fetchDataSearch,action.data);
    }

    yield put(receiveSearch(searched));

    }catch (e){
        console.log(e)
    }
}

export function* watchSearch(){
    yield takeLatest(REQUEST_SEARCHED_RESTOS, searchAsync);
    // yield takeLatest(REQUEST_SEARCHED_NAME_RESTOS, searchNameAsync);
    // yield takeLatest(REQUEST_SEARCHED_TYPE_RESTOS, searchTypeAsync);
}



//all Restaurants (Page 1)
function* allAsync(action){
    try {
        const allResto = yield call (fetchDataAll);
        yield put(receiveAll(allResto));
    }
    catch (e){
        console.log(e)
    }
}

export function* watchAll(){
    yield takeLatest(REQUEST_ALL_RESTOS, allAsync);
}

//Visited Restaurants (Page 2)
function* visitedAsync(){
    try {
        const data = yield call (fetchData);
        yield put(receiveVisited(data));
    }
    catch (e){
        console.log(e)
    }
}

export function* watchVisited(){
    yield takeLatest(REQUEST_VISITED_RESTOS, visitedAsync);
}

//add Visited Restaurants CheckBOx
function* checkedAsync(action){
    try {
        yield call (postVisited,action.restaurant);
        yield put(addVisitedSuccess);
    }
    catch (e){
        console.log(e)
    }
}

export function* watchChecked(){
    yield takeLatest(CHECKED, checkedAsync);
}

