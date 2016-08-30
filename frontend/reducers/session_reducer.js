import merge from 'lodash.merge';
import { sessionConstants } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});


const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case sessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case sessionConstants.LOGOUT:
      return merge({}, _nullUser);
    case sessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
