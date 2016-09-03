import { connect } from 'react-redux';
import UserForm from './user_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.user,
  cities: state.cities,
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  loggedIn: Boolean(state.session.currentUser)
});


const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
