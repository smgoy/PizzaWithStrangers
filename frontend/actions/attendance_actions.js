export const attendanceConstants = {
  CREATE_ATTENDANCE: 'CREATE_ATTENDANCE',
  DESTROY_ATTENDANCE: 'DESTROY_ATTENDANCE',
  CREATE_USER_ATTENDANCE: 'CREATE_USER_ATTENDANCE',
  DESTROY_USER_ATTENDANCE: 'DESTROY_USER_ATTENDANCE'
};

export const createAttendance = attendance => ({
  type: attendanceConstants.CREATE_ATTENDANCE,
  attendance
});

export const destroyAttendance = attendance => ({
  type: attendanceConstants.DESTROY_ATTENDANCE,
  attendance
});

export const createUserAttendance = attendance => ({
  type: attendanceConstants.CREATE_USER_ATTENDANCE,
  attendance
});

export const destroyUserAttendance = attendance => ({
  type: attendanceConstants.DESTROY_USER_ATTENDANCE,
  attendance
});
