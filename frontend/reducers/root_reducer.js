import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer.js';
import CitiesReducer from './cities_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  cities: CitiesReducer
});

export default RootReducer;
