import React from 'react';

const Body = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="row flex">
        <div className="col-md-6 home">
          <img src="assets/pizza_truck.png" />
        </div>
        <div className="col-md-6 ">
          <h1 className="home-text">We all feel a little more ourselves at a pizza party.</h1>
          <a className="btn btn-primary btn-block" href='#/signup' role="button">Join the Party!</a>
        </div>
      </div>
    </div>
  </div>
);

export default Body;
