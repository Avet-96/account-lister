import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { getComposeEnhancers } from "../appConfig";

const composeEnhancers = getComposeEnhancers() || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
