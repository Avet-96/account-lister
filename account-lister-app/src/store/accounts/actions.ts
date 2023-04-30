import { AxiosResponse } from "axios";
import accountListerApi from "../../api/accountListerApi";

import {
  Accounts,
  SetAccounts,
  SET_ACCOUNTS,
} from "./types";
import {Dispatch} from "redux";

export const queryAccounts = () => async (dispatch: Dispatch) => {
  try {
    const response: AxiosResponse = await accountListerApi.get<Accounts>('/accounts');

    dispatch<SetAccounts>({ type: SET_ACCOUNTS, payload: response.data });
  }catch (e){
    console.log(e)
  }
};
