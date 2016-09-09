import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { createAttendance,
         destroyAttendance } from '../../actions/attendance_actions';
import { addSeat,
         subtractSeat,
         destroyEvent } from '../../actions/events_actions';
import { becomeHost } from '../../actions/user_actions';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser,
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  destroyAttendance: attendance => dispatch(destroyAttendance(attendance)),
  addSeat: eventId => dispatch(addSeat(eventId)),
  subtractSeat: eventId => dispatch(subtractSeat(eventId)),
  becomeHost: userId => dispatch(becomeHost(userId)),
  destroyEvent: eventId => dispatch(destroyEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
