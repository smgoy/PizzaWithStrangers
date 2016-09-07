import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.decorateEvent = this.decorateEvent.bind(this);
  }

  quickSort(events) {
    if (events.length === 0) return events;
    if (events.length === 1) return events;

    let el = events[0];
    let left = events.slice(1).filter( event => Date.parse(event.date) <= Date.parse(el.date) );
    let right = events.slice(1).filter( event => Date.parse(event.date) > Date.parse(el.date) );

    return this.quickSort(left).concat([el]).concat(this.quickSort(right));
  }

  joinEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    const userId = this.props.currentUser.id;
    const attendance = { attendance: { event_id: eventId, user_id: userId } };
    this.props.createAttendance(attendance);
  }

  ditchEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    const userId = this.props.currentUser.id;
    const attendance = { event_id: eventId, user_id: userId };
    this.props.destroyAttendance(attendance);
  }

  decorateEvent(eventList) {
    if (eventList.length === 0) {
      return (
        <div className="event-container">
          <p>Host a party</p>
        </div>
      );
    } else {
      return eventList.map( eventObj => {
        let button;
        if (this.props.currentUser.attendances.includes(eventObj.id)) {
          button = <a data-id={eventObj.id} onClick={this.ditchEvent.bind(this)} className="join">Ditch</a>;
        } else {
          button = <a data-id={eventObj.id} onClick={this.joinEvent.bind(this)} className="join">Join</a>;
        }
        return(
          <div key={eventObj.id}>
            <div className="event-container">
              <div className="event-description">
                <p className="desc">{eventObj.name}:</p>
                <p className="desc">{eventObj.seats} Seat Left</p>
              </div>
              <div className="event-details">
                <p className="details">{eventObj.address}</p>
                <p className="details">{eventObj.date} at {eventObj.time}</p>
                {button}
              </div>
            </div>
          </div>);
      });
    }
  }

  render() {
    const {events} = this.props;

    let thisWeek = [];
    let thisMonth = [];
    let thisYear = [];

    Object.keys(events).forEach( id => {
      if (Date.parse(events[id].date) > Date.today() && Date.parse(events[id].date) < Date.today().add(7).days()) {
        thisWeek.push(events[id]);
      } else if (Date.parse(events[id].date) < Date.today().addMonths(1)) {
        thisMonth.push(events[id]);
      } else if (Date.parse(events[id].date) < Date.today().addYears(1)) {
        thisYear.push(events[id]);
      }
    });

    thisWeek = this.quickSort(thisWeek);
    thisMonth = this.quickSort(thisMonth);
    thisYear = this.quickSort(thisYear);


    return(
      <div className="container">
        <a href="#/new-event" className="new-event">+ New Event</a>

        <div className="event-header-container">
          <h2 className="event-header-text">this week.</h2>
        </div>

        {this.decorateEvent(thisWeek)}

        <div className="event-header-container">
          <h2 className="event-header-text">this month.</h2>
        </div>

        {this.decorateEvent(thisMonth)}

        <div className="event-header-container">
          <h2 className="event-header-text">this year.</h2>
        </div>

        {this.decorateEvent(thisYear)}

      </div>
    );
  }
}

export default withRouter(EventsIndex);
