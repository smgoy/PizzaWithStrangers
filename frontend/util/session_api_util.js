import $ from 'jquery';

export const signup = (data, success, error) => {
  $.ajax({
    url: 'api/users',
    method: 'POST',
    dataType: 'json',
    data,
    success,
    error
  });
};

export const login = (data, success, error) => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    dataType: 'json',
    data,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
    dataType: 'json',
    success,
    error
  });
};
