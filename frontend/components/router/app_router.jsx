import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import HomeContainer from '../home/home_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default AppRouter;
