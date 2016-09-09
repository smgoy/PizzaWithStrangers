export const becomeHost = (success, userId) => {
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    dataType: 'json',
    data: {user: {host: true}},
    success
  });
};
