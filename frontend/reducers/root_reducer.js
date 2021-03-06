import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer.js';
import { CitiesReducer, CityReducer } from './cities_reducer';
import { AttendeesReducer } from './attendance_reducer';
import { EventsReducer,
         EventErrors,
         EventDisplay,
         EventReducer,
         UserEvents } from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  cities: CitiesReducer,
  city: CityReducer,
  events: EventsReducer,
  eventErrors: EventErrors,
  eventDisplay: EventDisplay,
  event: EventReducer,
  userEvents: UserEvents,
  eventAttendees: AttendeesReducer
});

export default RootReducer;
