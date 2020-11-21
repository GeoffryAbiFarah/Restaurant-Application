import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {watchPage1 , watchVisited, watchAll, watchChecked} from './sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(watchPage1);
sagaMiddleware.run(watchVisited);
sagaMiddleware.run(watchAll);
sagaMiddleware.run(watchChecked);

export default store;
