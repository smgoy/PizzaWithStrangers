import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Home from '../home/home';
import SessionFormContainer from '../session_form/session_form_container';
import UserFormContainer from '../user_form/user_form_container';
import CitiesContainer from '../cities/cities_container';


class AppRouter extends React.Component{
  constructor(props) {
    super(props);
    this.getCities = this.getCities.bind(this);
  }

  getCities() {
    this.props.requestCities();
  }

  render () {
    return(
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/signup' component={SessionFormContainer} />
          <Route path='/login' component={SessionFormContainer} />
          <Route path='/new-profile' component={UserFormContainer} />
          <Route path='/cities' component={CitiesContainer} onEnter={this.getCities}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
