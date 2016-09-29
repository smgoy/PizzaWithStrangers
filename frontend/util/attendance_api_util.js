export const createAttendance = (success, data) => {
  $.ajax({
    url: 'api/attendances',
    method: 'POST',
    dataType: 'json',
    data,
    success
  });
};

export const destroyAttendance = (success, data) => {
  $.ajax({
    url: 'api/attendances/1',
    method: 'DELETE',
    dataType: 'json',
    data,
    success
  });
};

export const requestAttendees = (success, id) => {
  $.ajax({
    url: `api/attendances/event_attendees/${id}`,
    method: 'GET',
    dataType: 'json',
    success
  });
};
