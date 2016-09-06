import React from 'react';
import EventsContainer from '../events/events_container';
import EventForm from '../events/event_form';

const CityDetail = ({city}) => (
  <div>
    <div className="cover thumbnail">
      <img className='city-cover' src={city.image} />
      <h2 className="cover-text">{city.name}</h2>
    </div>
    <EventsContainer />
  </div>
);


export default CityDetail;
