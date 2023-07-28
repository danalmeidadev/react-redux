import { combineReducers } from "redux";

import Auth from "./auth/auth.reducers";
import Cart from "./cart/reducers";
import Product from "./product/reducers";

export const rootReducer = combineReducers({
  Auth,
  Cart,
  Product
});

export type RootState = ReturnType<typeof rootReducer>;

