import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import Home from '../home/home';
import SessionFormContainer from '../session_form/session_form_container';
import UserFormContainer from '../user_form/user_form_container';
import CitiesContainer from '../cities/cities_container';
import CityDetailContainer from '../cities/city_detail_container';


class AppRouter extends React.Component{
  constructor(props) {
    super(props);
    this.routes = (
      <Route path='/' component={App}>
        <IndexRoute component={Home} onEnter={this.requestCities.bind(this)} />
        <Route path='/signup' component={SessionFormContainer} onEnter={this.redirectIfLoggedIn.bind(this)} />
        <Route path='/login' component={SessionFormContainer}
                             onEnter={this.redirectIfLoggedIn.bind(this)}
                             onLeave={this.clearErrors.bind(this)} />
        <Route path='/new-profile' component={UserFormContainer}
                                   onEnter={this.redirectIfNoUser.bind(this)}
                                   onLeave={this.clearUser.bind(this)} />
        <Route path='/cities' component={CitiesContainer} onEnter={this.requestCities.bind(this)} />
        <Route path='/city/:cityId' component={CityDetailContainer} onEnter={this.requestCity.bind(this)} />
      </Route>
    );
  }

  clearErrors() {
    this.props.clearErrors();
  }

  clearUser() {
    this.props.clearUser();
  }

  redirectIfLoggedIn(nextState, replace) {
    if (this.props.currentUser) {
      replace('/');
    }
  }

  redirectIfNoUser(nextState, replace) {
    if (!this.props.user) {
      replace('/signup');
    }
  }

  requestCities() {
    this.props.requestCities();
  }

  requestCity(nextState) {
    const id = parseInt(nextState.params.cityId);
    this.props.requestCity(id);
    this.props.requestEvents(id);
  }

  render () {
    return(
      <Router history={ hashHistory } routes={this.routes}>
      </Router>
    );
  }
}

export default AppRouter;
