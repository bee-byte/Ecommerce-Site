import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/main pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
