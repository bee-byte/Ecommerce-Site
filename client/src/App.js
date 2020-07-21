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
import Register from './components/auth/Register';

import './App.css';
import './components/layout/Footer.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
    </div>
  );
}

export default App;
