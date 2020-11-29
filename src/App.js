import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Recipes from './components/pages/Recipes';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/recipes" component={Recipes} />
      </Router>
    </div>
  );
}

export default App;
