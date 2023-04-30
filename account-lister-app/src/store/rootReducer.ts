import { combineReducers } from "redux";

import accountReducer from "./account/reducers";
import accountsReducer from "./accounts/reducers";

export const rootReducer = combineReducers({
  account: accountReducer,
  accounts: accountsReducer
});
