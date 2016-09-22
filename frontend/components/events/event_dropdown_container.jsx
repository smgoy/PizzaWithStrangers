import { connect } from 'react-redux';
import EventDropdown from './event_dropdown';
import { eventDisplay } from '../../actions/events_actions';

const mapDispatchToProps = dispatch => ({
  eventDisplay: timePeriod => dispatch(eventDisplay(timePeriod))
});

export default connect(null, mapDispatchToProps)(EventDropdown);
