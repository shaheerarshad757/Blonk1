import {fork, all} from 'redux-saga/effects';
import {watchLogin} from './loginSaga';

export default function* rootSaga() {
  // yield [fork(watchLogin)];
  yield all([watchLogin()]);
}
