import { types } from "./type";
import { axios } from "../../api/axios";
import { errorHandlers } from "../../utils/errorHandlers";
import { endpoints } from "../../api/requests/endpoints";

const loginUserAuth = (values) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  
  try {
    const { data } = await axios.post(
      `${endpoints.users}/${endpoints.login}`,
      values
    );
    dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: types.USER_LOGIN_ERROR, payload: error });
    errorHandlers(error);
  }
};

const registerUserAuth = (values) => async (dispatch) => {
  dispatch({ type: types.USER_REGISTER_REQUEST });
  try {
    const { data } = await axios.post(endpoints.users, values);
    dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.USER_REGISTER_ERROR, payload: error });
    errorHandlers(error);
  }
};

const logoutUser = () => {
  return { type: types.USER_LOGOUT };
};

export { loginUserAuth, registerUserAuth, logoutUser };
