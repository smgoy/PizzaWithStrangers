import { requestEvents,
         createEvent } from '../util/events_api_util';
import { eventsConstants,
         receiveEvents,
         receiveEventErrors,
         addHostEvent } from '../actions/events_actions';

const EventsMiddleware = ({dispatch}) => next => action => {
  const errorsCallback = e => {
    const errors = e.responseJSON;
    dispatch(receiveEventErrors(errors));
  };
  switch (action.type) {
    case eventsConstants.REQUEST_EVENTS: {
      const successCallback = events => dispatch(receiveEvents(events));
      const cityId = action.cityId;
      requestEvents(successCallback, cityId);
      return next(action);
    }
    case eventsConstants.CREATE_EVENT: {
      const successCallback = event => dispatch(addHostEvent(event));
      const event = action.event;
      createEvent(successCallback, errorsCallback, event);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default EventsMiddleware;
