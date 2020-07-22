import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

import './Auth.css';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields, danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className="auth-form-container">
      <h1 className="auth-header">
        Sports Inc.<span className="text-primary"> Account Login</span>
      </h1>
      <div className="auth-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="email"
              id="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="Login"
          >
            <div className="button">
              <i className="far fa-check-circle" />
              <span className="send-text">Login</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
