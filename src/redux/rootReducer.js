import { combineReducers } from "redux";

const users = () => {
  return "users";
};

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
