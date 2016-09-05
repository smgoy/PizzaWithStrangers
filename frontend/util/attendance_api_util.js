export const createAttendance = (success, data) => {
  $.ajax({
    url: 'api/attendances',
    method: 'POST',
    dataType: 'json',
    data,
    success
  });
};

export const destroyAttendance = (success, id) => {
  $.ajax({
    url: `api/attendances/${id}`,
    method: 'DELETE',
    dataType: 'json',
    success
  });
};
