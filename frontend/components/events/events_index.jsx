import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {

  render() {
    const {events} = this.props;

    const eventList = Object.keys(events).map( id => (
      <li key={id}>{events[id].host_id}</li>
    ));

    return(
      <ul>
        {eventList}
      </ul>
    );
  }
}

export default EventsIndex;
