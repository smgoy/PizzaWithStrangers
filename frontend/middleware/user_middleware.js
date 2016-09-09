import { userConstants } from '../actions/user_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import { becomeHost } from '../util/user_api_util.js';

const UserMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case userConstants.BECOME_HOST:
      const success = user => dispatch(receiveCurrentUser(user));
      const userId = action.userId;
      becomeHost(success, userId);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
