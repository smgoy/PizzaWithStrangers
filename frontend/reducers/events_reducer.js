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
