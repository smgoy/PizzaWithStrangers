export const sessionConstants = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  INIT_SIGNUP: "INIT_SIGNUP",
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const signup = user => ({
  type: sessionConstants.SIGNUP,
  user
});

export const initSignup = user => ({
  type: sessionConstants.INIT_SIGNUP,
  user
});

export const login = user => ({
  type: sessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: sessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: sessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: sessionConstants.RECEIVE_ERRORS,
  errors
});
