import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import AccountsTable from "./AccountsTable";

import { selectAccounts } from "../store/accounts/selectors";
import { useAppDispatch } from "../store/hooks/reduxHooks";
import { queryAccounts } from "../store/accounts/actions";

const Accounts: FC = () => {
  const appDispatch = useAppDispatch();
  const accounts = useSelector(selectAccounts);

  useEffect(() => {
    appDispatch<any>(queryAccounts())
  }, [appDispatch]);


  return <AccountsTable accounts={accounts}/>
}

export default Accounts
