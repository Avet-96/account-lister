import { ActionWithPayload } from "../storeTypes";
export const SET_ACCOUNT = 'SET_ACCOUNT';

export type Account  = {
  _id: string;
  name: string;
  owner: string;
  createdOn: string;
  updatedOn: string;
};
export type InitialState = Account | null

export interface SetAccount extends ActionWithPayload<typeof SET_ACCOUNT, Account> {}

export type AccountAction =  SetAccount;
