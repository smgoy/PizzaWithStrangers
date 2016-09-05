import { createAttendance,
         destroyAttendance } from '../util/attendance_api_util';
import { attendanceConstants,
         createUserAttendance,
         destroyUserAttendance } from '../actions/attendance_actions';

const AttendanceMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case attendanceConstants.CREATE_ATTENDANCE: {
      const success = (attendance) => dispatch(createUserAttendance(attendance));
      createAttendance(success, action.attendance);
      return next(action);
    }
    case attendanceConstants.DESTROY_ATTENDANCE: {
      const success = (attendance) => dispatch(destroyUserAttendance(attendance));
      destroyAttendance(success, action.id);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default AttendanceMiddleware;
