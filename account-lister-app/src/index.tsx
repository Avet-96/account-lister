import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './App';

import history from './history';
import Store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );

root.render(
  <Provider store={Store}>
    <Router history={ history }>
      <Suspense fallback='loading...'>
        <App />
      </Suspense>
    </Router>
  </Provider>
);
