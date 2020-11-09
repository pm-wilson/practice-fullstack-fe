import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import List from '../list/List';
import Details from '../details/Details';
import Header from '../header/Header';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={List}
          />
          <Route
            path="/details/:id"
            exact
            component={Details}
          />
        </Switch>
      </Router>
    </div>
  );
}
