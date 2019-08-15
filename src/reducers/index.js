import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducers from './user';

const allReducers = combineReducers({
  user: userReducers,
  router: routerReducer,
})

export default allReducers;