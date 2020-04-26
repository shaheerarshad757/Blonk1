// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers";
// import createSagaMiddleware from "redux-saga";
// import { persistStore, persistReducer } from "redux-persist";
// import logger from "redux-logger";
// import storage from "@react-native-community/async-storage";
// // // import { eventBusMiddleware } from '../middlewares';
// import { rootSaga } from "../sagas";
//
// const persistConfig = {
//   key: "cialfo_students",
//   storage,
//   whitelist: ["session", "recentFilters"],
// };
//
// const middlewares = [];
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);
// middlewares.push(logger);
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// //
// export default function configureStore(initialState) {
//   let store = createStore(
//     persistedReducer,
//     initialState,
//     compose(applyMiddleware(...middlewares)),
//   );
//   global.store = store;
//   let persistor = persistStore(store);
//   sagaMiddleware.run(rootSaga);
//   return {store, persistor};
// }
// /** store.js */
// import rootSaga from './sagas';
// import reducers from './reducers';
// import createSagaMiddleware from 'redux-saga';
// import { createStore, compose, applyMiddleware } from 'redux';
// /** Saga Middleware */
// const sagaMiddleware = createSagaMiddleware();
// /** Create middlewares for redux */
// let middlewares = applyMiddleware(sagaMiddleware);
// /** Create redux store */
// const store = createStore(
//   reducers,
//   compose(middlewares)
// );
// /** run saga watchers */
// sagaMiddleware.run(rootSaga);
// export default store;
