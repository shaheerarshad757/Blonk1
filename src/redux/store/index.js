import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
// Logger with default options
import logger from 'redux-logger';

// const sagaMiddleware = createSagaMiddleware()
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(logger);

let store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

// sagaMiddleware.run(rootSaga);

export default store;
