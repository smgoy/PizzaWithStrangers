import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { requestEvents } from './actions/events_actions';

window.requestEvents = requestEvents;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
