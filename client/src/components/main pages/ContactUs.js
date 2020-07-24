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
    </section>
  );
};

export default ContactUs;
