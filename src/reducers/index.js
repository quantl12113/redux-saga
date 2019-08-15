import { combineReducers } from 'redux';

import userReducers from './user';

const allReducers = combineReducers({
  user: userReducers,
})

export default allReducers;