import {call, put, takeLatest} from 'redux-saga/effects';
// import {loginPressed} from '../actions'
import {
  LOGIN,
  LOGIN__REQUESTED,
  LOGIN__SUCCEEDED,
  LOGIN__FAILED,
  LOGIN__COMPLETED,
} from '../actions/actionTypes';
import loginApi from '../Api';
import jwtDecode from 'jwt-decode';
import {AsyncStorage} from 'react-native';

export function* doLogin(action) {
  try {
    const {email, password} = action.payload;

    const responseBody = yield call(loginApi, email, password);

    if (typeof responseBody.token === "undefined") {
      throw new Error('Unable to find JWT in response body');
    }

    yield put({
      type: LOGIN.LOGIN__SUCCEEDED,
      payload: {
        idToken: responseBody.token
      }
    });
  } catch (e) {
    yield put({
      type: LOGIN.LOGIN__FAILED,
      payload: {
        message: e.message,
        statusCode: e.statusCode
      },
    });
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN.LOGIN__REQUESTED, doLogin);
}

export function* watchLoginSucceeded() {
  yield takeLatest(LOGIN.LOGIN__SUCCEEDED, doLoginSucceeded);
}
export function* doLoginSucceeded(action) {
  const {idToken} = action.payload;

  const {id, email} = yield call(jwtDecode, idToken);

  yield put({
    type: LOGIN.LOGIN__COMPLETED,
    payload: {
      id,
      email,
      token: idToken,
    },
  });
}
export function* doLoginFailed(action) {}

export function* watchLoginFailed() {
  yield takeLatest(LOGIN.LOGIN__FAILED, doLoginFailed);
}
