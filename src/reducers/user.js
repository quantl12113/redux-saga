import { ActionTypes } from '../actions';

const defaultState = {
  username: '',
  isLogging: false,
}

const userReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        ...state,
        isLogging: true,
      }
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        username: action.username,
        isLogging: false,
      }
    }

    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        errors: action.errors,
        isLogging: false,
      }
    }

    default:
      return state;
  }
}

export default userReducers;