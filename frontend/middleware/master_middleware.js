import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CitiesMiddleware from './cities_middleware';

const MasterMiddleware = applyMiddleware(
  SessionMiddleware,
  CitiesMiddleware
);

export default MasterMiddleware;
