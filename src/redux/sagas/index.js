import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actionTypes';

const getUser = (email, password) => {
  return axios.post('https://api.staging.jumpsoftware.com/v1/signin', {
    email: email,
    password: password,
  });
};

function* loginFlow(action) {
  try {
    let email = action.payload.email;
    let password = action.payload.password;
    console.log(email, password);
    console.log('I am action payload', action.payload);

    const response = yield call(getUser, email, password);
    let token = response.data.token;

    const result = yield response;

    if (token) {
      console.log('success: ', token);
      yield call(AsyncStorage.setItem, 'token', token);

      yield put({type: LOGIN_SUCCESS, token});
    } else {
      if (result.error) {
        yield put({type: LOGIN_FAILURE, error: result.error});
      }
    }
  } catch (e) {
    yield put({type: LOGIN_FAILURE, error: e.message});
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN, loginFlow);
}
