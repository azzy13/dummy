import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </>
    </Router>
  );
}

export default App;
