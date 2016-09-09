import React from 'react';
import EventsContainer from '../events/events_container';

const CityDetail = ({city}) => (
  <div>
    <div className="cover">
      <img className='city-cover' src={city.image} />
      <h2 className="cover-text-top">Get ready to</h2>
      <h2 className="cover-text-bottom">party {city.name}!</h2>
    </div>
    <EventsContainer />
  </div>
);


export default CityDetail;
