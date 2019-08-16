import { call, put, all, take } from 'redux-saga/effects';
import { ActionTypes } from '../actions';
import Api from '../helper/Api';
import { push } from 'react-router-redux'

function* loggin() {
  while (true) {
    const { email, password } = yield take(ActionTypes.LOGIN);
    try {
      console.log("11111");
      yield call(Api.login, { email, password });
      yield put({ type: ActionTypes.LOGIN_SUCCESS, email })
      yield put(push('/'))
    } catch (error) {
      yield put({ type: ActionTypes.LOGIN_FAIL, error })
    }
  }
}

function* logout() {
  try {
    const email = '';
    yield put({ type: ActionTypes.LOGOUT, email })
  } catch (error) {
    yield put({ type: ActionTypes.LOGOUT_FAIL })
  }
}

function* register() {
  const { email, password, username } = yield take(ActionTypes.REGISTER);
  try {
    yield call(Api.register, { email, password, username });
    yield put({ type: ActionTypes.REGISTER_SUCCESS, email })
    yield put(push('/login'))
  } catch (error) {
    yield put({ type: ActionTypes.REGISTER_FAIL })
  }
}

export default function* userSagas() {
  yield all([
    loggin(),
    logout(),
    register(),
  ])
}