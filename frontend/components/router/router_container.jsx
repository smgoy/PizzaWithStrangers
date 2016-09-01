import { connect } from 'react-redux';
import AppRouter from './app_router';
import { requestCities } from '../../actions/cities_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
