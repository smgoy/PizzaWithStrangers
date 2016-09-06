import { requestEvents, createEvent } from '../util/events_api_util';
import { eventsConstants,
         receiveEvents,
         receiveEventErrors } from '../actions/events_actions';

const EventsMiddleware = ({dispatch}) => next => action => {
  const successCallback = events => dispatch(receiveEvents(events));
  const errorsCallback = e => {
    const errors = e.responseJSON;
    dispatch(receiveEventErrors(errors));
  };
  switch (action.type) {
    case eventsConstants.REQUEST_EVENTS: {
      const cityId = action.cityId;
      requestEvents(successCallback, cityId);
      return next(action);
    }
    case eventsConstants.CREATE_EVENT:
      const event = action.event;
      createEvent(successCallback, errorsCallback, event);
      return next(action);
    default:
      return next(action);
  }
};

export default EventsMiddleware;
