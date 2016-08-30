import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className='navbar-header'>
        <a className="navbar-brand" href="#">Pizza With Strangers</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Cities</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
