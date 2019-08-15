import { ActionTypes } from '../actions';

const defaultState = {
  email: '',
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
        email: action.email,
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