import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
