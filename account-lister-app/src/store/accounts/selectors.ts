import { createSelector } from 'reselect';
import {RootState} from "../store";

const stateSelector = (state: RootState) => state['accounts'];

export const selectAccounts = createSelector(stateSelector, accounts => accounts);
