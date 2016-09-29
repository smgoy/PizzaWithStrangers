import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { createAttendance,
         destroyAttendance } from '../../actions/attendance_actions';
import { addSeat,
         subtractSeat,
         destroyEvent,
         receiveEvent,
         requestAttendees } from '../../actions/events_actions';
import { becomeHost } from '../../actions/user_actions';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser,
  city: state.city,
  cities: state.cities,
  eventDisplay: state.eventDisplay
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  destroyAttendance: attendance => dispatch(destroyAttendance(attendance)),
  addSeat: eventId => dispatch(addSeat(eventId)),
  subtractSeat: eventId => dispatch(subtractSeat(eventId)),
  becomeHost: userId => dispatch(becomeHost(userId)),
  destroyEvent: eventId => dispatch(destroyEvent(eventId)),
  receiveEvent: event => dispatch(receiveEvent(event)),
  requestAttendees: eventId => dispatch(requestAttendees(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
