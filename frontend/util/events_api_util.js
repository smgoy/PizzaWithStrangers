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
