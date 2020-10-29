import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/about'
          render={(props) => (
            <About {...props} name={'Azhar Hasan'} rgno={'18113174'} />
          )}
        />
      </Fragment>
    </Router>
  );
};

export default App;
