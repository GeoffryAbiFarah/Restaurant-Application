import {takeEvery, put, takeLatest, call} from 'redux-saga/effects';
import {fetchData, fetchDataAll} from '../api';
import {receiveVisited} from '../actions/visitedAction';
import {REQUEST_VISITED_RESTOS, REQUEST_ALL_RESTOS, CHANGE_PAGE1, CHANGE_PAGE1_ASYNC} from '../types';
import { receiveAll } from '../actions/restaurantsAction';

//PAges
function* page1Async(){
    yield put({type: CHANGE_PAGE1_ASYNC});
}

export function* watchPage1(){
    yield takeEvery(CHANGE_PAGE1, page1Async);
}

//Visited Restaurants (Page 1)
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
function* visitedAsync(action){
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