export const citiesConstants = {
  REQUEST_CITIES: "REQUEST_CITIES",
  RECEIVE_CITIES: "RECEIVE_CITIES"
};

export const requestCities = () => ({
  type: citiesConstants.REQUEST_CITIES
});

export const receiveCities = cities => ({
  type: citiesConstants.RECEIVE_CITIES,
  cities
});
