import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
