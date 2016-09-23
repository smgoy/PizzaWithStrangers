import React from 'react';
import { withRouter } from 'react-router';
import EventDropdown from './event_dropdown_container';

class EventsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.decorateEvent = this.decorateEvent.bind(this);
    this.eventPermission = this.eventPermission.bind(this);
    this.correctCity = this.correctCity.bind(this);
    this.becomeHost = this.becomeHost.bind(this);
    this.displayEvents = this.displayEvents.bind(this);
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

  destroyEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    this.props.destroyEvent(eventId);
  }

  editEvent(e) {
    e.preventDefault();
    const event = $(e.currentTarget).data('event');
    this.props.receiveEvent(event);
    this.props.router.push('/edit-event');
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

  displayEvents(week, month, year) {
    if (this.props.eventDisplay === 'this week') {
      return this.decorateEvent(week);
    } else if (this.props.eventDisplay === 'this month') {
      return this.decorateEvent(month);
    } else if (this.props.eventDisplay === 'this year') {
      return this.decorateEvent(year);
    }
  }

  decorateEvent(eventList) {
    if (eventList.length === 0) {
      return (
        <div className="no-party">
          <p className="no-party-text">
            What! There are no parties {this.props.eventDisplay}.
            Host one why don't you!
          </p>
        </div>
      );
    } else {
      return eventList.map( eventObj => {
        let button;
        if (this.props.currentUser.attendances.includes(eventObj.id)) {
          button = (
            <div className="event-join-container">
              <a data-id={eventObj.id} onClick={this.ditchEvent.bind(this)} className="join">Ditch</a>
            </div>
          );
        } else if (this.props.currentUser.hosted_events.includes(eventObj.id)) {
          button = (
            <div className="event-modify-container">
              <a data-event={JSON.stringify(eventObj)} onClick={this.editEvent.bind(this)} className="join">Edit</a>
              <a data-id={eventObj.id} onClick={this.destroyEvent.bind(this)} className="join">Delete</a>
            </div>
          )
        } else {
          if (eventObj.seats == 0) {
            button = (
              <div className="event-join-container">
                <a className="join-disabled">Missed Out</a>
              </div>
            );
          } else {
            button = (
              <div className="event-join-container">
                <a data-id={eventObj.id} onClick={this.joinEvent.bind(this)} className="join">Join</a>
              </div>
            );
          }
        }

        let titleShortner;
        if (eventObj.name.length >= 21) {
          titleShortner = eventObj.name.slice(0,19) + '...';
        } else {
          titleShortner = eventObj.name;
        }

        return(
          <div className="event-container" key={eventObj.id}>
            <h3 className="title">{titleShortner}</h3>
            <hr />
            <p className="event-info"><span className='seats'>{eventObj.seats}</span> Seat Left</p>
            <p className="event-info">{eventObj.address}</p>
            <p className="event-info">{eventObj.date}</p>
            <p className="event-info">at {eventObj.time}</p>
            {button}
          </div>
        );
      });
    }
  }

  render() {
    const {events} = this.props;

    let thisWeek = [];
    let thisMonth = [];
    let thisYear = [];

    Object.keys(events).forEach( id => {
      if (Date.parse(events[id].date) >= Date.today() && Date.parse(events[id].date) < Date.today().add(7).days()) {
        thisWeek.push(events[id]);
      } else if (Date.parse(events[id].date) >= Date.today() && Date.parse(events[id].date) < Date.today().addMonths(1)) {
        thisMonth.push(events[id]);
      } else if (Date.parse(events[id].date) >= Date.today() && Date.parse(events[id].date) < Date.today().addYears(1)) {
        thisYear.push(events[id]);
      }
    });

    thisMonth = thisMonth.concat(thisWeek);
    thisYear = thisYear.concat(thisMonth);

    thisWeek = this.quickSort(thisWeek);
    thisMonth = this.quickSort(thisMonth);
    thisYear = this.quickSort(thisYear);


    return(
      <div>
        <div className="city-greeter">
          <h2 className="city-greeter-text">Checkout the upcoming events <EventDropdown /></h2>
        </div>

        <div className="events-container">
          {this.eventPermission()}
          <br />

          <div className="display-events">
            {this.displayEvents(thisWeek, thisMonth, thisYear)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EventsIndex);
