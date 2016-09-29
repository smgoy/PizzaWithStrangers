import { createAttendance,
         destroyAttendance,
         requestAttendees } from '../util/attendance_api_util';
import { attendanceConstants,
         createUserAttendance,
         destroyUserAttendance,
         receiveAttendees } from '../actions/attendance_actions';

const AttendanceMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case attendanceConstants.CREATE_ATTENDANCE: {
      const success = (attendance) => dispatch(createUserAttendance(attendance));
      createAttendance(success, action.attendance);
      return next(action);
    }
    case attendanceConstants.DESTROY_ATTENDANCE: {
      const success = (attendance) => dispatch(destroyUserAttendance(attendance));
      destroyAttendance(success, action.attendance);
      return next(action);
    }
    case attendanceConstants.REQUEST_ATTENDEES: {
      const successCallback = attendees => dispatch(receiveAttendees(attendees));
      requestAttendees(successCallback, action.eventId);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default AttendanceMiddleware;
