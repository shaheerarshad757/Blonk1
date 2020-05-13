import {put, call, all, takeLatest, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actionTypes';

const getUser = (email, password) => {
  return fetch('https://api.staging.jumpsoftware.com/v1/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

function* loginFlow(action) {
  try {
    let email = action.email;
    let password = action.password;
    // let email = 'developerm216@gmail.com';
    // let password = 'Jump123456';
    // console.log(email, password);

    const response = yield call(getUser, email, password);
    console.log(`I called API with ${email} and ${password} = ${response}`);

    let token = response.headers.get('access-token');
    console.log(`Maybe I got response ----->>>> ${token}`);

    const result = yield response.json();

    if (token) {
      console.log('success: ', token);
      yield call(AsyncStorage.setItem, 'token', token);

      yield put({type: LOGIN_SUCCESS, result});
    } else {
      if (result.error) {
        yield put({type: LOGIN_FAILURE, error: result.error});
      }
    }
  } catch (e) {
    yield put({type: LOGIN_FAILURE, error: e.message});
    console.log('UnSuccessful: NO TOKENNNNN.... ');
    console.log('error', e);
  }
}

export default function* rootSaga() {
  yield takeEvery(LOGIN, loginFlow);
}
