import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contactPage">
      <h1 className="contact-header">We'd like to hear from you !</h1>

      <div className="contact-form">
        <form
          className="myForm"
          action="https://formspree.io/xgenpjjg"
          method="POST"
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
              />
            </div>
          </div>
          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="button">
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">Send</span>
            </div>
          </button>
        </form>
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
    </section>
  );
};

export default ContactUs;
