import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/main pages/Home';
import About from './components/main pages/About';
import ContactUs from './components/main pages/ContactUs';

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
