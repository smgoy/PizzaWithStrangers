import { connect } from 'react-redux';
import { requestCities } from '../../actions/cities_actions';
import AppRouter from './app_router';

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities())
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
