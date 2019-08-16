import ActionTypes from './action-types';

export const loginAction = ({ email, password }) => ({
  type: ActionTypes.LOGIN,
  email,
  password,
});

export const registerAction = ({ email, password, username }) => ({
  type: ActionTypes.REGISTER,
  email,
  password,
  username
});

export const logOutAction = () => ({
  type: ActionTypes.LOGOUT,
});