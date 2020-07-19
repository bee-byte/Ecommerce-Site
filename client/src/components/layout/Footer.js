import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="contact-details">
          <p>Contact Number : 0800 169 745</p>
          <p>Email: brittneybee82@gmail.com</p>
        </div>
        <div className="webpage-links">
          <ul>
            <li>
              <i className="fa fa-twitter-square" aria-hidden="true" />
              <a href="https://github.com/bee-byte">Twitter</a>
            </li>
            <li>
              <i className="fa fa-facebook-official" aria-hidden="true" />
              <a href="https://github.com/bee-byte">Facebook</a>
            </li>
            <li className="info-page">
              <Link to="About">About Us</Link>
            </li>
            <li className="contact-sheet">
              <a className="grey-text text-lighten-3" href="#Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
