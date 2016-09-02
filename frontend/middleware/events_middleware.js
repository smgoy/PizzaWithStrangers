import { requestEvents } from '../util/events_api_util';
import { eventsConstants,
         receiveEvents } from '../actions/events_actions';

const EventsMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case eventsConstants.REQUEST_EVENTS: {
      const success = events => dispatch(receiveEvents(events));
      const cityId = action.cityId;
      requestEvents(success, cityId);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default EventsMiddleware;
