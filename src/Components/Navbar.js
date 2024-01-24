import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {

    const [click, setclick] = useState(false);
    const toggleNav = () => {
        setclick(!click);
      };
    return (
      <>
        <nav className="nav">
          <a href="index.html">
            <h2 className="logoname">Cryptocurrency Dashboard</h2>
          </a>
          <div>
            <ul id='navbar' className={click?"#navbar active":"#navbar"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div id='mobile' onClick={toggleNav}>
          
            <i  id='bar' className={ click ? "fas fa-times":"fas fa-bars"}></i>
       
          </div>
        </nav>
        <h1>Crypto Dashboard</h1>
        <p>Discover all details about your favorite cryptocurrency like: prices, changes, and more!</p>
      </>
    );
};

export default Navbar;