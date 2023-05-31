import React, { useState } from 'react';
import Header from './Header.js';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>    
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>
    </Router>
  );
}

export default App;
