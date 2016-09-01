import React from 'react';

class CitiesIndex extends React.Component {

  render() {
    const {cities} = this.props;

    const cityList = Object.keys(cities).map( id => (
      <div key={id} className="city-image">
        <a href="#" className="thumbnail">
          <div className="city-name">
            <p className="city-text">{cities[id].name}</p>
          </div>
          <img className="show-city" src={cities[id].image} />
        </a>
      </div>
    ));

    return(
      <div className='container city-container'>
        <h1 className="center text-container">We're hosting pizza parties all over the continent!</h1>
        <h4 className="center text-container">CHECK OUT OUR EVENTS IN THESE CITIES</h4>
        <div className='city-list'>
          {cityList}
        </div>
      </div>
    );
  }
}

export default CitiesIndex;
