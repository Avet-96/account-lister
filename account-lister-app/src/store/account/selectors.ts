import { createSelector } from 'reselect';
import {RootState} from "../store";

const stateSelector = (state: RootState) => state['account'];

export const selectAccount = createSelector(stateSelector, account => account);
