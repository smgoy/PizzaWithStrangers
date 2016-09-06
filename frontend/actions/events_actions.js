export const eventsConstants = {
  REQUEST_EVENTS: "REQUEST_EVENTS",
  RECEIVE_EVENTS: "RECEIVE_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",
  RECEIVE_EVENT_ERRORS: "RECEIVE_EVENT_ERRORS",
  CLEAR_EVENT_ERRORS: "CLEAR_EVENT_ERRORS"
};

export const requestEvents = cityId => ({
  type: eventsConstants.REQUEST_EVENTS,
  cityId
});

export const receiveEvents = events => ({
  type: eventsConstants.RECEIVE_EVENTS,
  events
});

export const createEvent = event => ({
  type: eventsConstants.CREATE_EVENT,
  event
});

export const receiveEventErrors = errors => ({
  type: eventsConstants.RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: eventsConstants.CLEAR_EVENT_ERRORS
});
