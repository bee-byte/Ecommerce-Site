import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="row main">
        <div className="col site-info">
          <div className="footer-disclaimer">
            <h2 className="Brand">Sports Inc.</h2>
            <p>
              Sports Inc. stores are filled with a variety of sports equipment
              to suit your fitness needs !
            </p>
          </div>
          <div className="footer-links" id="footer-section">
            <ul>
              <li>
                <Link to="/Ecommerce-site" alt="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" alt="">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/About" alt="">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-1x">
                <span className="contact-text place">
                  Stellenbosch || Cape Town
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-1x">
                <span className="contact-text phone">
                  <a href="tel:021-695-3322" title="Give me a call">
                    (021)695 3322
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope" aria-hidden="true">
                <span className="contact-text gmail">
                  <a
                    href="mailto:brittneybee82@gmail.com"
                    title="Send me an email"
                  >
                    feedback@sportsinc.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <div className="copyright">&copy; SportsInc.2020</div>
        </div>
        <div className="row">
          <div className="social-icons">
            <ul>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
