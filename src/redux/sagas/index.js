import {fork, all} from 'redux-saga/effects';
import * as loginSaga from './loginSaga';

export default function* rootSaga() {
  yield [
    fork(loginSaga.watchLogin),
    fork(loginSaga.watchLoginSucceeded),
    fork(loginSaga.watchLoginFailed),
  ];
}
