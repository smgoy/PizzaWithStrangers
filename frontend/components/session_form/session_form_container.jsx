import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, initSignup } from '../../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  currentUser: state.session.currentUser,
  signUpInfo: state.user.user
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : initSignup;

  return {
    processForm: user => dispatch(processForm(user)),
    login: guest => dispatch(login(guest)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
