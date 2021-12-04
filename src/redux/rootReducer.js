import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["auth"],
};

const rootReducer = combineReducers({
  auth,
});

export default persistReducer(persistConfig, rootReducer);
