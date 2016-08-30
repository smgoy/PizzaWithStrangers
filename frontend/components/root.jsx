import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/app_router';
//make sure to remember to add in the store (configureStore() from entry.jsx)

const Root = () => (
  <Provider >
    <AppRouter />
  </Provider>
);

export default Root;
