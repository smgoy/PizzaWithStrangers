import merge from 'lodash.merge';
import { eventsConstants } from '../actions/events_actions';

export const EventsReducer = (state = {}, action) => {
  switch (action.type) {
    case eventsConstants.RECEIVE_EVENTS:
      return action.events;
    case eventsConstants.ADD_SEAT: {
      const newState = Object.assign({}, state);
      const seats = state[action.eventId].seats + 1;
      newState[action.eventId].seats = seats;
      return newState;
    }
    case eventsConstants.SUBTRACT_SEAT: {
      const newState = Object.assign({}, state);
      const seats = state[action.eventId].seats - 1;
      newState[action.eventId].seats = seats;
      return newState;
    }
    case eventsConstants.DELETE_HOST_EVENT: {
      const newState = Object.assign({}, state);
      delete newState[action.event.id];
      return newState;
    }
    default:
      return state;
  }
};

export const EventErrors = (state = [], action) => {
  switch (action.type) {
    case eventsConstants.RECEIVE_EVENT_ERRORS:
      return action.errors;
    case eventsConstants.CLEAR_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
};

export const EventDisplay = (state = "this week", action) => {
  switch (action.type) {
    case eventsConstants.EVENT_DISPLAY:
      return action.timePeriod;
    case eventsConstants.RESET_EVENT_DISPLAY:
      return "this week";
    default:
      return state;
  }
};

export const EventReducer = (state = {}, action) => {
  switch (action.type) {
    case eventsConstants.RECEIVE_EVENT:
      return action.event;
    default:
      return state;
  }
};

export const UserEvents = (state = {attendances: {}, hosted_events: {}}, action) => {
  switch(action.type) {
    case eventsConstants.RECEIVE_USER_EVENTS:
      if (!action.events.attendances) action.events.attendances = {};
      if (!action.events.hosted_events) action.events.hosted_events = {};
      return action.events;
    case eventsConstants.DESTROY_USER_EVENT: {
      const newState = Object.assign({}, state);
      delete newState.attendances[action.eventId];
      return newState;
    }
    case eventsConstants.DESTROY_HOST_EVENT: {
      const newState = Object.assign({}, state);
      delete newState.hosted_events[action.eventId];
      return newState;
    }
    default:
      return state;
  }
};
