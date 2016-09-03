import merge from 'lodash.merge';
import { sessionConstants } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case sessionConstants.INIT_SIGNUP:
      return action.user;
    case sessionConstants.CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
