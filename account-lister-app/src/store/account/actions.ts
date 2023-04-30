import {AxiosResponse} from "axios";
import accountListerApi from "../../api/accountListerApi";

import {
  Account, SetAccount, SET_ACCOUNT,
} from "./types";
import {Dispatch} from "redux";

export const queryAccount = (accountId: string, errorCallbeck: () => void) => async (dispatch: Dispatch) => {
  try {
    const { data }: AxiosResponse = await accountListerApi.get<Account>(`/accounts/${accountId}`);

    dispatch<SetAccount>({ type: SET_ACCOUNT, payload: data });


  }catch (e){
    errorCallbeck()
    console.log(e)
  }
};
