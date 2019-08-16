import ActionTypes from './action-types';

export const loadDataAction = () => ({
  type: ActionTypes.LOAD_DATA,
});

export const loadDataSuccessAction = (data) => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailAction = ({ errors }) => ({
  type: ActionTypes.LOAD_DATA_FAIL,
  errors,
})