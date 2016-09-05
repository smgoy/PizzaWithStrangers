import merge from 'lodash.merge';
import { sessionConstants } from '../actions/session_actions';
import { attendanceConstants } from '../actions/attendance_actions';

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
    case sessionConstants.CLEAR_ERRORS:
      return merge({}, state, { errors: [] });
    case attendanceConstants.CREATE_USER_ATTENDANCE: {
      let attendances = state.currentUser.attendances.slice();
      attendances.push(action.attendance.id);
      return merge({}, state, { currentUser: { attendances } });
    }
    case attendanceConstants.DESTROY_USER_ATTENDANCE: {
      let attendances = state.currentUser.attendances.slice();
      let index = attendances.indexOf(action.attendance.id);
      attendances.slice(index, 1);
      return merge({}, state, { currentUser: { attendances } });
    }
    default:
      return state;
  }
};

export default SessionReducer;
