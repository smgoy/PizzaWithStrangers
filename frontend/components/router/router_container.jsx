import { connect } from 'react-redux';
import AppRouter from './app_router';
import { requestCities, requestCity } from '../../actions/cities_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities()),
  requestCity: id => dispatch(requestCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
