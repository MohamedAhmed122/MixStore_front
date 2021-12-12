import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/reducer";
import products from "./products/reducer";
import productDetail from "./productDetail/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  products,
  productDetail,
});

export default persistReducer(persistConfig, rootReducer);
