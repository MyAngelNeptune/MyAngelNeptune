import React from 'react';
import nep from './Components/Images/anep3.png';
import Home from './Components/JS/Home.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
