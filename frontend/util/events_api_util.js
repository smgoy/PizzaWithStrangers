export const requestEvents = (success, cityId) => {
  $.ajax({
    url: `api/cities/${cityId}/events`,
    method: 'GET',
    dataType: 'json',
    success
  });
};
