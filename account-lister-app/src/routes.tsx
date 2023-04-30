import { ComponentType } from 'react';

import Accounts from "./components/Accounts";
import Account from "./components/Account";

type RoutesType = {
  path: string | string[]
  section?: string
  component: ComponentType<any>
}

const list: RoutesType[] = [
  {
    path: '/accounts',
    component: Accounts,
  },
  {
    path: '/account/:id',
    section: 'account',
    component: Account ,
  },
]

export default list;
