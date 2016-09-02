export const eventsConstants = {
  REQUEST_EVENTS: "REQUEST_EVENTS",
  RECEIVE_EVENTS: "RECEIVE_EVENTS"
};

export const requestEvents = cityId => ({
  type: eventsConstants.REQUEST_EVENTS,
  cityId
});

export const receiveEvents = events => ({
  type: eventsConstants.RECEIVE_EVENTS,
  events
});
