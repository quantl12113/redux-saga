import { call, put, all, take } from 'redux-saga/effects';
import { ActionTypes } from '../actions';
import Api from '../helper/Api';

function* loadData() {
  while (true) {
    yield take(ActionTypes.LOAD_DATA);
    try {
      const data = yield call(Api.loadData);
      yield put({ type: ActionTypes.LOAD_DATA_SUCCESS, data: data })
    } catch (error) {
      yield put({ type: ActionTypes.LOAD_DATA_FAIL, error })
    }
  }
}

export default function* viewSagas() {
  yield all([
    loadData(),
  ])
}