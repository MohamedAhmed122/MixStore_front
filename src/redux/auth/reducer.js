import { types } from "./type";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.USER_REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case types.USER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
