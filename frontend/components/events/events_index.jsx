import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.decorateEvent = this.decorateEvent.bind(this);
    this.eventPermission = this.eventPermission.bind(this);
    this.correctCity = this.correctCity.bind(this);
    this.becomeHost = this.becomeHost.bind(this);
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
    this.props.subtractSeat(attendance.attendance.event_id);
  }

  ditchEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    const userId = this.props.currentUser.id;
    const attendance = { event_id: eventId, user_id: userId };
    this.props.destroyAttendance(attendance);
    this.props.addSeat(attendance.event_id);
  }

  becomeHost() {
    const userId = this.props.currentUser.id;
    this.props.becomeHost(userId);
  }

  correctCity(e) {
    if (this.props.city.id !== this.props.currentUser.city_id) {
      e.preventDefault();
      const homeCity = this.props.cities[this.props.currentUser.city_id].name;
      alert(`Sorry, you can only host events in your home city: ${homeCity}.`);
    }
  }

  eventPermission() {
    if (this.props.currentUser.host) {
      return <a onClick={this.correctCity} href="#/new-event" className="new-event"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> New Event</a>;
    } else {
      return <a onClick={this.becomeHost} className="new-event">Become a Host</a>;
    }
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
      <div className="event-container">

        {this.eventPermission()}
        <br />

        <h2 className='event-menu-text'>Checkout the upcoming pizza parties <span className="event-dropdown">this week <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></span></h2>

      </div>
    );
  }
}

export default withRouter(EventsIndex);
