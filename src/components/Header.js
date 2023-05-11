import React from 'react';
import logo from '../components/logo.png';
import '../styles/index.css';

function Header() {
  return (
    <header className="header">
      <div className='container'>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
