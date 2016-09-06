export const eventsConstants = {
  REQUEST_EVENTS: "REQUEST_EVENTS",
  RECEIVE_EVENTS: "RECEIVE_EVENTS",
  CREATE_EVENT: "CREATE_EVENT"
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
