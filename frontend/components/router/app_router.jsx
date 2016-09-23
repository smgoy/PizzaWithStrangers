import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import HomeContainer from '../home/home_container';
import SessionFormContainer from '../session_form/session_form_container';
import UserFormContainer from '../user_form/user_form_container';
import CitiesContainer from '../cities/cities_container';
import CityDetailContainer from '../cities/city_detail_container';
import EventFormContainer from '../events/event_form_container';
import Dashboard from '../dashboard/dashboard';


class AppRouter extends React.Component{
  constructor(props) {
    super(props);
    this.routes = (
      <Route path='/' component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path='/signup' component={SessionFormContainer} onEnter={this.redirectIfLoggedIn.bind(this)} />
        <Route path='/login' component={SessionFormContainer}
                             onEnter={this.redirectIfLoggedIn.bind(this)}
                             onLeave={this.clearErrors.bind(this)} />
        <Route path='/new-profile' component={UserFormContainer}
                                   onEnter={this.redirectIfNoUser.bind(this)}
                                   onLeave={this.clearUser.bind(this)} />
        <Route path='/cities' component={CitiesContainer}
                              onEnter={this.requestCities.bind(this)}
                              onLeave={this.clearCity.bind(this)} />
        <Route path='/city/:cityId' component={CityDetailContainer}
                                    onEnter={this.requestCity.bind(this)}
                                    onLeave={this.resetEventDisplay.bind(this)}/>
        <Route path='/new-event' component={EventFormContainer}
                                 onLeave={this.clearErrors.bind(this, 'event')}
                                 onEnter={this.redirectIfNotLoggedIn.bind(this)} />
        <Route path='/edit-event' component={EventFormContainer}
                                onLeave={this.clearErrors.bind(this, 'event')}
                                onEnter={this.redirectIfNotLoggedIn.bind(this)} />
        <Route path='/dashboard' component={Dashboard}
                                 onEnter={this.redirectIfNotLoggedIn.bind(this)} />
      </Route>
    );
  }

  clearCity() {
    this.props.clearCity();
  }

  resetEventDisplay() {
    this.props.resetEventDisplay();
  }

  clearErrors(type) {
    if (type === 'event') {
      this.props.clearEventErrors();
    } else {
      this.props.clearErrors();
    }
  }

  clearUser() {
    this.props.clearUser();
  }

  redirectIfLoggedIn(nextState, replace) {
    if (this.props.currentUser) {
      replace('/');
    }
  }

  redirectIfNotLoggedIn(nextState, replace) {
    if (!this.props.currentUser) {
      replace('/login');
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
