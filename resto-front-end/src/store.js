import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {watchVisited, watchAll, watchChecked, watchSearch} from './sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

// sagaMiddleware.run(watchPage1);
sagaMiddleware.run(watchVisited);
sagaMiddleware.run(watchAll);
sagaMiddleware.run(watchChecked);
sagaMiddleware.run(watchSearch);

export default store;
