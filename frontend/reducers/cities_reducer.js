import merge from 'lodash.merge';
import { citiesConstants } from '../actions/cities_actions';

export const CitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case citiesConstants.RECEIVE_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export const CityReducer = (state = {}, action) => {
  switch (action.type) {
    case citiesConstants.RECEIVE_CITY:
      return action.city;
    default:
      return state;
  }
};
