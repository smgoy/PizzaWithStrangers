import { requestCities } from '../util/cities_api_util';
import { citiesConstants, receiveCities } from '../actions/cities_actions';

const CitiesMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case citiesConstants.REQUEST_CITIES:
      const success = cities => dispatch(receiveCities(cities));
      requestCities(success);
      return next(action);
    default:
      return next(action);
  }
};

export default CitiesMiddleware;
