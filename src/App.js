import React from 'react';
import { Navbar, Home, Perks, Search, Workplace,Contact } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Perks />
    <Search/>
    <Workplace />
    <Contact/>
  </div>
);

export default App;