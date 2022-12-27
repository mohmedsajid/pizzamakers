/* Suparno Karmakar */
import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(props){
    return( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light brand">
      <Link to="/" className='brand logo'>PizzaMakers</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/pizzamakers">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/members">Members</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
