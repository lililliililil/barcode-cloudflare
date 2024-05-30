import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <div className='navbar__logo'>
        <i class="fa-solid fa-b"></i>
          <a>barcode</a>
        </div>

        <ul className='navbar__menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Project</a></li>
          <li><a href='#'>SNS</a></li>
        </ul>

        <ul className='navbar__icons'>
          <li><a href='https://discord.gg/UqcHmuy2wR'><i class="fa-brands fa-discord"></i></a></li>
          <li><a href='https://github.com/lililliililil'><i class="fa-brands fa-github"></i></a></li>
        </ul>

        <a href="#" class="navbar__toogleBtn">
            <i class="fas fa-bars"></i>
        </a>
      </nav>

      <div className='testing_info'>
        <h1>Unfortunately, this is website is making. Please try to connect again later.</h1>
      </div>
    </div>
  );
}

export default App;