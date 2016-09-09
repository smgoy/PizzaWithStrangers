import merge from 'lodash.merge';
import { sessionConstants } from '../actions/session_actions';
import { attendanceConstants } from '../actions/attendance_actions';
import { eventsConstants } from '../actions/events_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});


const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case sessionConstants.RECEIVE_CURRENT_USER: {
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    }
    case sessionConstants.LOGOUT: {
      return merge({}, _nullUser);
    }
    case sessionConstants.RECEIVE_ERRORS: {
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    }
    case sessionConstants.CLEAR_ERRORS: {
      return merge({}, state, { errors: [] });
    }
    case attendanceConstants.CREATE_USER_ATTENDANCE: {
      const attendances = state.currentUser.attendances.slice();
      attendances.push(action.attendance.event_id);
      const currentUser = Object.assign({}, state.currentUser, { attendances });
      return Object.assign({}, state, { currentUser });
    }
    case attendanceConstants.DESTROY_USER_ATTENDANCE: {
      const attendances = state.currentUser.attendances.slice();
      const index = attendances.indexOf(action.attendance.event_id);
      attendances.splice(index, 1);
      const currentUser = Object.assign({}, state.currentUser, { attendances });
      return Object.assign({}, state, { currentUser });
    }
    case eventsConstants.ADD_HOST_EVENT: {
      const hostedEvents = state.currentUser.hosted_events.slice();
      hostedEvents.push(action.event.id);
      const currentUser = Object.assign({}, state.currentUser, { hosted_events: hostedEvents });
      return Object.assign({}, state, { currentUser });
    }
    default:
      return state;
  }
};

export default SessionReducer;
