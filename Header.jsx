import React from 'react';
import './Header.css';


function Header() {
  return (
    <div>
    <header className="header">
      <label className="logo">DEV@DEAKIN</label>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="options">
        <button className="option">POST</button>
        <button className="option">LOGIN</button>
      </div>
    </header>
    <img className = "header-img" src={require('./header-image.jpg')}/>
    </div>
  );
}

export default Header;