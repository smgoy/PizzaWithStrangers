import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CitiesMiddleware from './cities_middleware';
import EventsMiddleware from './events_middleware';
import AttendanceMidleware from './attendance_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  SessionMiddleware,
  CitiesMiddleware,
  EventsMiddleware,
  AttendanceMidleware,
  loggerMiddleware
);

export default MasterMiddleware;
