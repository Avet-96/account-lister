import { ActionWithPayload } from "../storeTypes";
import { Account } from "../account/types";

export const SET_ACCOUNTS = 'SET_ACCOUNTS';


export type Accounts = Account[];

export interface SetAccounts extends ActionWithPayload<typeof SET_ACCOUNTS, Accounts> {}

export type AccountActions = SetAccounts;
