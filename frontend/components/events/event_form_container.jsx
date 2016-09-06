import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/events_actions';

const mapStateToProps = state => ({
  city_id: state.session.currentUser.city_id,
  eventErrors: state.eventErrors,
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
