export const requestCities = (success) => {
  $.ajax({
    url: 'api/cities/',
    method: 'GET',
    dataType: 'json',
    success
  });
};

export const requestCity = (success, id) => {
  $.ajax({
    url: `api/cities/${id}`,
    method: 'GET',
    dataType: 'json',
    success
  });
};
