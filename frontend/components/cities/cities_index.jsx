import React from 'react';
import { withRouter } from 'react-router';

class CitiesIndex extends React.Component {

  handleClick(router, url) {
    router.push(url);
  }

  render() {
    const {cities} = this.props;
    const {router} = this.props;

    const cityList = Object.keys(cities).map( id => (
      <div key={id} className="city-image">
        <a onClick={this.handleClick.bind(this, router, `/city/${id}`)} className="thumbnail">
          <div className="city-name">
            <p className="city-text">{cities[id].name}</p>
          </div>
          <img className="show-city" src={cities[id].image} />
        </a>
      </div>
    ));

    return(
      <div className='city-container'>
        <div className='city-header-container'>
          <img src="assets/pizza_truck.png" />
          <div>
            <h1 className="city-header-text">We're trucking to you</h1>
            <h1 className="city-header-text">from all over the globe!</h1>
          </div>
        </div>
        <h4 className="city-header-subtext">CHECK OUT OUR EVENTS IN THESE CITIES</h4>
        <div className='city-list'>
          {cityList}
        </div>
      </div>
    );
  }
}

export default withRouter(CitiesIndex);
