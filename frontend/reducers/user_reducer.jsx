import merge from 'lodash.merge';
import { sessionConstants } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case sessionConstants.INIT_SIGNUP:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
