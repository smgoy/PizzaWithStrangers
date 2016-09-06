import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer.js';
import { CitiesReducer, CityReducer } from './cities_reducer';
import { EventsReducer, EventErrors } from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  cities: CitiesReducer,
  city: CityReducer,
  events: EventsReducer,
  eventErrors: EventErrors
});

export default RootReducer;
