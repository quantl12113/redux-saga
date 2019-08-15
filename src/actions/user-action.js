import ActionTypes from './action-types';

export const loginAction = ({ email, password, username }) => ({
  type: ActionTypes.LOGIN,
  email,
  password,
  username,
});

export const loginSuccessAction = ({ username }) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  username,
});

export const loginFailAction = ({ errors }) => ({
  type: ActionTypes.LOGIN_FAIL,
  errors,
})