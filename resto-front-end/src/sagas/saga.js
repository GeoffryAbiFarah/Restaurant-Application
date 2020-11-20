import {takeEvery, put, takeLatest, call} from 'redux-saga/effects';
import {fetchData} from '../api';
import {receiveVisited} from '../actions/visitedAction';
import {REQUEST_VISITED_RESTOS, CHANGE_PAGE1, CHANGE_PAGE1_ASYNC} from '../types';

function* page1Async(){
    // yield delay(4000);
    yield put({type: CHANGE_PAGE1_ASYNC});
}


export function* watchPage1(){
    yield takeEvery(CHANGE_PAGE1, page1Async);
}


//api call
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