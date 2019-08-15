import { call, put, all, take } from 'redux-saga/effects';
import { ActionTypes } from '../actions';
import { Redirect } from 'react-router-dom';
import Api from '../helper/Api';

function* loggin() {
  const { email, password, username } = yield take(ActionTypes.LOGIN);
  try {
    yield call(Api.login, { email, password, username });
    yield put({ type: ActionTypes.LOGIN_SUCCESS, username })
    yield put(console.log("success"))
  } catch (error) {
    yield put({ type: ActionTypes.LOGIN_FAIL, error })
  }
}

export default function* userSagas() {
  yield all([
    loggin(),
  ])
}