import {
  AccountActions, Accounts,
  SET_ACCOUNTS
} from "./types";

const initialState: Accounts = [];

const accountsReducer = (state: Accounts = initialState, action: AccountActions): Accounts => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return action.payload;
    default:
      return state;
  }
};

export default accountsReducer
