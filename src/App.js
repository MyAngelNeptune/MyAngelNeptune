import React from 'react';
import Home from './Components/JS/Home.js';
import Navbar from './Components/JS/Navbar.js';
import Neptune from './Components/JS/Neptune.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='Neptune' component={Neptune} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
