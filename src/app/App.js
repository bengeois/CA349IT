import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './../components/Header/Header';
import Home from './pages/Home/Home';
import Space from './../components/Space/Space';

const App = () => {
  return (
    <Router>
      <Header />
      <Space value="70px" />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
