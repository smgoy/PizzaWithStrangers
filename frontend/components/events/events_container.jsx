import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { createAttendance } from '../../actions/attendance_actions';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
