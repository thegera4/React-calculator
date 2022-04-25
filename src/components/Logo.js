import React from 'react';
import logo from '../images/square-symbol-pattern-calculator-thumbnail.jpg'
import '../stylesheets/Logo.css'

const Logo = () => (
    <div className="container-logo">
        <img 
          src={logo}
          className="logo"
          alt="App logo" />
        <h1 className="title">React Calculator</h1>
    </div>
);

export default Logo;