import { connect } from 'react-redux';
import EventsIndex from './events_index';

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, null)(EventsIndex);
