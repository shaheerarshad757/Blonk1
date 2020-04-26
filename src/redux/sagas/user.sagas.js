import {call, put, takeEvery, select} from 'redux-saga/effects';
import {login} from '../api';
import { UserCreators, UserTypes } from "../actions";
// import NavigationService from "@navigation/navigation-service";
// import { PushNotifications } from "@helpers";
// import { schoolApiAccessTokenSelector } from "../selectors";
// import { SCREENS } from "@constants";

export function* watchUserRequests() {
  yield takeEvery(UserTypes.REQUEST_LOGIN, requestLogin);
  // yield takeEvery(UserTypes.FETCH_PROFILE, requestProfile);
  // yield takeEvery(UserTypes.REQUEST_RESET_PASSWORD, requestResetPassword);
  // yield takeEvery(UserTypes.REQUEST_LOGOUT, requestLogout);
  // yield takeEvery(UserTypes.LOGOUT, logout);
}

function* requestLogin(action) {
  try {
    const response = yield call(
      login,
      action.params,
      action.params.schoolApiAccessToken,
    );

    const {details} = response.data.status;
    yield put(UserCreators.loginSuccess(details));
    NavigationService.navigateToDashboard(details.user);
    PushNotifications.configure(details.user);
  } catch (error) {
    yield put(UserCreators.loginFailure(error));
  }
}

// function* requestProfile(action) {
//   try {
//     const schoolApiAccessToken = yield select(schoolApiAccessTokenSelector);
//
//     const userIdSelector = state => state.session.user.id;
//     const userId = yield select(userIdSelector);
//
//     const response = yield call(
//       fetchProfile,
//       action.params,
//       userId,
//       schoolApiAccessToken,
//     );
//     yield put(
//       UserCreators.fetchProfileSuccess(
//         response.data.status.details.student,
//       ),
//     );
//   } catch (error) {
//     yield put(UserCreators.fetchProfileFailure(error));
//   }
// }
//
// function* requestResetPassword(action) {
//   try {
//     const response = yield call(
//       resetPassword,
//       action.params,
//       action.schoolApiAccessToken,
//     );
//     yield put(UserCreators.resetPasswordSuccess());
//     NavigationService.navigate("ResetPasswordAcknowledgement");
//   } catch (error) {
//     yield put(UserCreators.resetPasswordFailure(error));
//   }
// }
//
// function* requestLogout(action) {
//   try {
//     const sessionIdSelector = state => state.session.id;
//     const sessionTokenSelector = state => state.session.token;
//     const sessionId = yield select(sessionIdSelector);
//     const token = yield select(sessionTokenSelector);
//     const schoolApiAccessToken = yield select(
//       schoolApiAccessTokenSelector,
//     );
//     const params = { token };
//
//     yield call(logoutAsync, params, sessionId, schoolApiAccessToken);
//     yield put(UserCreators.logout());
//   } catch (error) {
//   }
// }

// function* logout(action) {
//   PushNotifications.unsubscribeFromPubNub();
//   NavigationService.navigate(SCREENS.AUTH_STACK);
// }
