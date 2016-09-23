import { connect } from 'react-redux';
import AppRouter from './app_router';
import { requestCities,
         requestCity,
         clearCity } from '../../actions/cities_actions';
import { requestEvents,
         clearEventErrors,
         resetEventDisplay,
         requestUserEvents } from '../../actions/events_actions';
import { clearErrors, clearUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities()),
  requestCity: id => dispatch(requestCity(id)),
  requestEvents: id => dispatch(requestEvents(id)),
  clearErrors: () => dispatch(clearErrors()),
  clearUser: () => dispatch(clearUser()),
  clearCity: () => dispatch(clearCity()),
  clearEventErrors: () => dispatch(clearEventErrors()),
  resetEventDisplay: () => dispatch(resetEventDisplay()),
  requestUserEvents: () => dispatch(requestUserEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
