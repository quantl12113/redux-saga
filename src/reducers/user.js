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

    case ActionTypes.REGISTER: {
      return {
        ...state,
        isRegister: true,
      }
    }

    case ActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        registerEmail: action.email,
        isREgister: false,
      }
    }

    case ActionTypes.REGISTER_FAIL: {
      return {
        ...state,
        errors: action.errors,
        isREgister: false,
      }
    }

    case ActionTypes.LOGOUT: {
      return {
        ...state,
        email: action.email
      }
    }

    default:
      return state;
  }
}

export default userReducers;