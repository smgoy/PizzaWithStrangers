import merge from 'lodash.merge';
import { eventsConstants } from '../actions/events_actions';

export const EventsReducer = (state = {}, action) => {
  switch (action.type) {
    case eventsConstants.RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};