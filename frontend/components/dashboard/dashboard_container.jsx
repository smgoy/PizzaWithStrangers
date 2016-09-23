import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createAttendance,
         destroyAttendance } from '../../actions/attendance_actions';
import { addSeat,
         destroyEvent,
         destroyUserEvent,
         destroyHostEvent,
         receiveEvent } from '../../actions/events_actions';
import { becomeHost } from '../../actions/user_actions';

const mapStateToProps = state => ({
  userEvents: state.userEvents,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  destroyAttendance: attendance => dispatch(destroyAttendance(attendance)),
  addSeat: eventId => dispatch(addSeat(eventId)),
  destroyUserEvent: eventId => dispatch(destroyUserEvent(eventId)),
  destroyHostEvent: eventId => dispatch(destroyHostEvent(eventId)),
  becomeHost: userId => dispatch(becomeHost(userId)),
  destroyEvent: eventId => dispatch(destroyEvent(eventId)),
  receiveEvent: event => dispatch(receiveEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
