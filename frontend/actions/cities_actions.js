export const citiesConstants = {
  REQUEST_CITIES: "REQUEST_CITIES",
  RECEIVE_CITIES: "RECEIVE_CITIES",
  REQUEST_CITY: "REQUEST_CITY",
  RECEIVE_CITY: "RECEIVE_CITY",
  CLEAR_CITY: "CLEAR_CITY"
};

export const requestCities = () => ({
  type: citiesConstants.REQUEST_CITIES
});

export const receiveCities = cities => ({
  type: citiesConstants.RECEIVE_CITIES,
  cities
});

export const requestCity = id => ({
  type: citiesConstants.REQUEST_CITY,
  id
});

export const receiveCity = city => ({
  type: citiesConstants.RECEIVE_CITY,
  city
});

export const clearCity = () => ({
  type: citiesConstants.CLEAR_CITY
});
