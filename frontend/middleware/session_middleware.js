import { receiveErrors,
         receiveCurrentUser,
         sessionConstants
       } from '../actions/session_actions';

import { requestUserEvents } from '../actions/events_actions';

import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({dispatch}) => next => action => {
  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
    dispatch(requestUserEvents());
  };
  const errorCallback = e => {
    const errors = e.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case sessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case sessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case sessionConstants.LOGOUT:
      logout(() => next(action), errorCallback);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
