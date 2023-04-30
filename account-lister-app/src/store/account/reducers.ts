import {
 SET_ACCOUNT, AccountAction, InitialState,
} from "./types";

const initialState: InitialState = null;

const accountsReducer = (state: InitialState = initialState, action: AccountAction): InitialState => {
  switch (action.type) {
    case SET_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default accountsReducer
