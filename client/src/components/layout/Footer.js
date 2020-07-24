import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div class="footer-section">
      <div class="row main">
        <div class="col site-info">
          <div class="footer-disclaimer">
            <div class="logo">
              <img src="" alt="" />
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div class="footer-links" id="footer-section">
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
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  Stellenbosch || Cape Town
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:021-695-3322" title="Give me a call">
                    (021)695 3322
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
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
        <div class="row">
          <div class="social-icons">
            <ul>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://socialntworkname.com" alt="">
                  <i class="fab fa-youtube"></i>
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
