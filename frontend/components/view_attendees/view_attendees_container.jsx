import { connect } from 'react-redux';
import viewAttendees from './view_attendees';

const mapStateToProps = (state) => ({
  eventAttendees: state.eventAttendees
});

export default connect(mapStateToProps, null)(viewAttendees);
