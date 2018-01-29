import React, { Component } from 'react';
const logo = require('./images/propelx.png');

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <a href="#" className="logo">
          <img src={logo} alt="Proplex Logo"/>
        </a>
        <ul className="nav">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">For Investors</a>
          </li>
          <li>
            <a href="#">For Startups</a>
          </li>
          <li>
            <a href="#">For Experts</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#" className="signuplink">Sign Up</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
