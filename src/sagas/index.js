import { all } from 'redux-saga/effects';
import userSagas from './user-sagas'
import viewSagas from './view-sagas';

function* rootSaga() {
  yield all([
    ...userSagas(),
    ...viewSagas()
  ])
}

export default rootSaga;