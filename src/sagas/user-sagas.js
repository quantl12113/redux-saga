import { call, put, all, take } from 'redux-saga/effects';
import { ActionTypes } from '../actions';
import Api from '../helper/Api';
import { push } from 'react-router-redux'

function* loggin() {
  const { email, password, username } = yield take(ActionTypes.LOGIN);
  try {
    yield call(Api.login, { email, password, username });
    yield put({ type: ActionTypes.LOGIN_SUCCESS, email })
    localStorage.setItem('username', username);
    yield put(push('/'))
  } catch (error) {
    yield put({ type: ActionTypes.LOGIN_FAIL, error })
  }
}

export default function* userSagas() {
  yield all([
    loggin(),
  ])
}