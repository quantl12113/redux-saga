import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducers from './user';
import viewReducers from './view';

const allReducers = combineReducers({
  user: userReducers,
  router: routerReducer,
  view: viewReducers,
})

export default allReducers;