import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-form-container">
      <h1 className="auth-header">
        Sports Inc.<span className="text-primary"> Account Registration</span>
      </h1>
      <div className="auth-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              // value={email}
              // onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              // value={email}
              // onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              // value={password}
              // onChange={onChange}
              required
            />
          </div>
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="Register"
          >
            <div className="button">
              <i className="far fa-check-circle" />
              <span className="send-text">Register</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
