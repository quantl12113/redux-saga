import { ActionTypes } from '../actions';

const defaultState = {
  isLoading: false,
}

const viewReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_DATA: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case ActionTypes.LOAD_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }
    }

    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      }
    }

    default:
      return state;
  }
}

export default viewReducers;