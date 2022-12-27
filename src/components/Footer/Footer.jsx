/* 
Vasu Chopra
Mohmed Sajid
*/
import React from "react";
import {Link} from 'react-router-dom';
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer container">
          <div className="footer-info">
            <a href="/" className="logo">
              PizzaMakers
            </a>
            <p>
            We simplify the food cooking process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience.
            </p>
          </div>

          <div className="footer-info">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <h5>Our Location</h5>
              <span>06 Thuderbird drive, Cambridge</span>
            </div>
            <div className="contact-info">
              <h5>Phone</h5>
              <a href="tel:555-555-5555">555-555-5555</a>
            </div>
            <div className="contact-info">
              <h5>Email</h5>
              <a href="mailto:mshaikh0336@conestogac.on.ca">info@pizzamakers.com</a>
            </div>
            
          </div>

          <div className="footer-info">
            <h4>Quick Links</h4>
            <div className="quick-links contact-info">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
              {/* <a href="/"><h5>Home</h5></a>
              <a href="/menu"><h5>Menu</h5></a>
              <a href="/about-us"><h5>About Us</h5></a>
              <a href="/contact-us"><h5>Contact Us</h5></a> */}
            </div>
          </div>
          
          
        </div>
        <div className="copyright">
          <div className="container">
            <span>&copy; FG3 - 8 Web Trends Group Project Fall - 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
