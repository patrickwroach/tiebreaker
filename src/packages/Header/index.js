import React, { Component } from "react";
import logo from '../../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="Tie || Breaker"/>
      </header>
    );
  }
}

export default Header;
