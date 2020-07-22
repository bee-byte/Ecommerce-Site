import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/main pages/Home';
import About from './components/main pages/About';
import ContactUs from './components/main pages/ContactUs';
import Rugby from './components/product pages/Rugby';
import Soccer from './components/product pages/Soccer';
import Cricket from './components/product pages/Cricket';
import Login from './components/auth/Login';
import Alerts from './components/auth/Alerts';
import Register from './components/auth/Register';

import AuthState from './components/context/auth/AuthState';
import AlertState from './components/context/alert/AlertState';
import setAuthToken from './utills/setAuthToken';

import './App.css';
import './components/layout/Footer.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <Router>
            <Navbar />
            <Alerts />
            <Switch>
              <Route exact path="/Ecommerce-Site" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/Rugby" component={Rugby} />
              <Route path="/Soccer" component={Soccer} />
              <Route path="/Cricket" component={Cricket} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
            </Switch>
            <Footer />
          </Router>
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;
