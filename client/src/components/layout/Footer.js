import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="footer-content">
          <ul>
            <li className="info-page">
              <Link to="About">About Us</Link>
            </li>
            <li className="contact-sheet">
              <Link to="ContactUs">Contact Us</Link>
            </li>
            <b>Follow us on :</b>
            <li>
              <i className="fa fa-twitter-square" aria-hidden="true" />
              <a href="https://github.com/bee-byte">Twitter</a>
            </li>
            <li>
              <i className="fa fa-facebook-official" aria-hidden="true" />
              <a href="https://github.com/bee-byte">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </footer>
  );
};

export default Footer;
