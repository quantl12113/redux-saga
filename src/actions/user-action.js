import ActionTypes from './action-types';

export const loginAction = ({ email, password }) => ({
  type: ActionTypes.LOGIN,
  email,
  password,
});

export const loginSuccessAction = ({ email }) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  email,
});

export const loginFailAction = ({ errors }) => ({
  type: ActionTypes.LOGIN_FAIL,
  errors,
})