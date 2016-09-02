import { requestCities, requestCity } from '../util/cities_api_util';
import { citiesConstants,
         receiveCities,
         receiveCity } from '../actions/cities_actions';

const CitiesMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case citiesConstants.REQUEST_CITIES: {
      const success = cities => dispatch(receiveCities(cities));
      requestCities(success);
      return next(action);
    }
    case citiesConstants.REQUEST_CITY: {
      const success = city => dispatch(receiveCity(city));
      requestCity(success, action.id);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default CitiesMiddleware;
