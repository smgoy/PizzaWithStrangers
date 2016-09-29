import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CitiesMiddleware from './cities_middleware';
import EventsMiddleware from './events_middleware';
import AttendanceMidleware from './attendance_middleware';
import UserMiddleware from './user_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  SessionMiddleware,
  CitiesMiddleware,
  EventsMiddleware,
  AttendanceMidleware,
  UserMiddleware
);

export default MasterMiddleware;
