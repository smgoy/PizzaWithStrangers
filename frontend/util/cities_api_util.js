export const requestCities = (success) => {
  $.ajax({
    url: 'api/cities',
    method: 'GET',
    dataType: 'json',
    success
  });
};
