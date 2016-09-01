import merge from 'lodash.merge';
import { citiesConstants } from '../actions/cities_actions';

const CitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case citiesConstants.RECEIVE_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default CitiesReducer;
