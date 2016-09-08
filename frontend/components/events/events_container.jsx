import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { createAttendance,
         destroyAttendance } from '../../actions/attendance_actions';

const mapStateToProps = state => ({
  events: state.events,
  currentUser: state.session.currentUser,
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  createAttendance: attendance => dispatch(createAttendance(attendance)),
  destroyAttendance: attendance => dispatch(destroyAttendance(attendance))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
