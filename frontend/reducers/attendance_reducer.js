import merge from 'lodash.merge';
import { attendanceConstants } from '../actions/attendance_actions';

export const AttendeesReducer = (state = {}, action) => {
  switch (action.type) {
    case attendanceConstants.RECEIVE_ATTENDEES:
      return action.attendees;
    default:
      return state;
  }
};
