import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Home from '../home/home';
import SessionFormContainer from '../session_form/session_form_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/signup' component={SessionFormContainer} />
      <Route path='/login' component={SessionFormContainer} />
    </Route>
  </Router>
);

export default AppRouter;
