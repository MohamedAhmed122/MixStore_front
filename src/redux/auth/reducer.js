import { types } from "./type";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case types.USER_REGISTER:
      return {
        isAuthenticated: true,
        user: action.payload,
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