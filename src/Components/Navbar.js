import React, { useState } from 'react';
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
                <a href="index.html" className='active'>Home</a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">contact</a>
              </li>
            </ul>
          </div>
          <div id='mobile' onClick={toggleNav}>
          
            <i  id='bar' className={ click ? "fas fa-times":"fas fa-bars"}></i>
       
          </div>
        </nav>
      </>
    );
};

export default Navbar;