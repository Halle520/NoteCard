import {put, call, takeEvery} from 'redux-saga/effects';
import loginAction from '../actions/loginAction';

function* onLoginUser(action) {
  try {
    const {payload} = action;
    const data = yield call(() => {});
    const {user} = data || {};

    yield put(loginAction.loginSuccess(payload));
  } catch (error) {
    yield put(loginAction.loginFailure(error));
  }
}

export function* watchLoginUser() {
  yield takeEvery(loginAction.actionLogin, onLoginUser);
}
