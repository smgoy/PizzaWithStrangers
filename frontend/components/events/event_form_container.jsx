import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent,
         updateEvent } from '../../actions/events_actions';

const mapStateToProps = state => ({
  city_id: state.session.currentUser.city_id,
  eventErrors: state.eventErrors,
  events: state.events,
  event: state.event
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
