export const requestEvents = (success, cityId) => {
  $.ajax({
    url: `api/cities/${cityId}/events`,
    method: 'GET',
    dataType: 'json',
    success
  });
};

export const createEvent = (success, error, data) => {
  $.ajax({
    url: `api/events`,
    method: 'POST',
    dataType: 'json',
    data,
    success,
    error
  });
};

export const destroyEvent = (success, eventId) => {
  $.ajax({
    url: `api/events/${eventId}`,
    method: 'DELETE',
    dataType: 'json',
    success
  });
};
