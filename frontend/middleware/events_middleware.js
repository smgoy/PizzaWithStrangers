import { requestEvents,
         createEvent,
         destroyEvent,
         updateEvent,
         requestUserEvents } from '../util/events_api_util';
import { eventsConstants,
         receiveEvents,
         receiveEventErrors,
         addHostEvent,
         deleteHostEvent,
         clearEventErrors,
         receiveUserEvents } from '../actions/events_actions';

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
      const successCallback = event => {
        dispatch(addHostEvent(event));
        dispatch(clearEventErrors(event));
      };
      const event = action.event;
      createEvent(successCallback, errorsCallback, event);
      return next(action);
    }
    case eventsConstants.UPDATE_EVENT: {
      const successCallback = event => dispatch(clearEventErrors(event));
      const event = action.event;
      updateEvent(successCallback, errorsCallback, event);
      return next(action);
    }
    case eventsConstants.DESTROY_EVENT: {
      const successCallback = event => dispatch(deleteHostEvent(event));
      const eventId = action.eventId;
      destroyEvent(successCallback, eventId);
      return next(action);
    }
    case eventsConstants.REQUEST_USER_EVENTS: {
      const successCallback = events => dispatch(receiveUserEvents(events));
      requestUserEvents(successCallback);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default EventsMiddleware;
