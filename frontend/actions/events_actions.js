export const eventsConstants = {
  REQUEST_EVENTS: "REQUEST_EVENTS",
  RECEIVE_EVENTS: "RECEIVE_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  ADD_SEAT: "ADD_SEAT",
  SUBTRACT_SEAT: "SUBTRACT_SEAT",
  ADD_HOST_EVENT: "ADD_HOST_EVENT",
  DELETE_HOST_EVENT: "DELETE_HOST_EVENT",
  RECEIVE_EVENT_ERRORS: "RECEIVE_EVENT_ERRORS",
  CLEAR_EVENT_ERRORS: "CLEAR_EVENT_ERRORS",
  DESTROY_EVENT: "DESTROY_EVENT",
  EVENT_DISPLAY: "EVENT_DISPLAY",
  RESET_EVENT_DISPLAY: "RESET_EVENT_DISPLAY",
  RECEIVE_EVENT: "RECEIVE_EVENT",
  REQUEST_USER_EVENTS: "REQUEST_USER_EVENTS",
  RECEIVE_USER_EVENTS: "RECEIVE_USER_EVENTS",
  DESTROY_USER_EVENT: "DESTROY_USER_EVENT",
  DESTROY_HOST_EVENT: "DESTROY_HOST_EVENT"
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

export const updateEvent = event => ({
  type: eventsConstants.UPDATE_EVENT,
  event
});

export const receiveEventErrors = errors => ({
  type: eventsConstants.RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: eventsConstants.CLEAR_EVENT_ERRORS
});

export const addSeat = eventId => ({
  type: eventsConstants.ADD_SEAT,
  eventId
});

export const subtractSeat = eventId => ({
  type: eventsConstants.SUBTRACT_SEAT,
  eventId
});

export const addHostEvent = event => ({
  type: eventsConstants.ADD_HOST_EVENT,
  event
});

export const deleteHostEvent = event => ({
  type: eventsConstants.DELETE_HOST_EVENT,
  event
});

export const destroyEvent = eventId => ({
  type: eventsConstants.DESTROY_EVENT,
  eventId
});

export const eventDisplay = timePeriod => ({
  type: eventsConstants.EVENT_DISPLAY,
  timePeriod
});

export const resetEventDisplay = () => ({
  type: eventsConstants.RESET_EVENT_DISPLAY
});

export const receiveEvent = event => ({
  type: eventsConstants.RECEIVE_EVENT,
  event
});

export const requestUserEvents = () => ({
  type: eventsConstants.REQUEST_USER_EVENTS
});

export const receiveUserEvents = events => ({
  type: eventsConstants.RECEIVE_USER_EVENTS,
  events
});

export const destroyUserEvent = eventId => ({
  type: eventsConstants.DESTROY_USER_EVENT,
  eventId
});

export const destroyHostEvent = eventId => ({
  type: eventsConstants.DESTROY_HOST_EVENT,
  eventId
});
